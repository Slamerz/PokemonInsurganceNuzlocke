import React, {useEffect, useState} from 'react';
import {useLocalStorage} from "../Util/useLocalStorage";
import pokemonList from '../pokemon.json'
import { useHistory } from 'react-router-dom';

const Form = () => {
    const [team, setTeam] = useLocalStorage('team', [])
    const [formData, setFormData] = useState({})
    let history = useHistory();
    const initialItem = {Nickname: "", isShiny: false, pokemonId: ""}

    useEffect(()=>{
        let loadedData: any = {}
        team.forEach((item: any, index: number)=>{
            loadedData[index] = {Nickname: item.Nickname, isShiny: item.isShiny, pokemonId: item.Dex}
        })
        setFormData(loadedData)
    }, [])
    const handleInputChange = (event: any) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name, id} = target;
        // @ts-ignore
        setFormData(data => ({...data, [id]:{...data[id], [name]: value}}))

    }

    const deletePokemon = (event: any, id:string) =>{
        event.preventDefault()
        setFormData((data:any) => ({...data, [id]: initialItem}))
    }

    const onSave = (event:any) =>{
        event.preventDefault()
        if(formData === {}){
            return
        }
        let newTeam = []
        // @ts-ignore
        for(const item in formData){
            // @ts-ignore
            if(formData[item].Nickname && formData[item].pokemonId){
                // @ts-ignore
                const {isShiny, Nickname, pokemonId} = formData[item]
                const pokemonData = pokemonList.find(poke => poke.Dex === pokemonId)
                newTeam.push({...pokemonData, isShiny: isShiny || false, Nickname})
            }
        }
        setTeam(newTeam)
        history.push('/widget')
    }

    return (
        <div>
            <form>
                {['','','','','',''].map((element, index) =>  (<div style={{border: '1px solid black'}}>
                    <label>
                        Nickname:

                        <input
                            id={index.toString()}
                            name={'Nickname'}
                            // @ts-ignore
                           value={formData[index.toString()] ? formData[index.toString()]['Nickname'] : ""}
                            type={'text'}
                            onChange={handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Shiny?:
                        <input id={index.toString()} name={'isShiny'} type={'checkbox'}
                            // @ts-ignore
                               value={formData[index.toString()] ? formData[index.toString()]['isShiny']  : false}
                               // @ts-ignore
                               checked={formData[index.toString()] ? formData[index.toString()]['isShiny'] : false}
                               onChange={handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Pokemon:
                        <select id={index.toString()}
                                name={'pokemonId'}
                                // @ts-ignore
                                value={formData[index.toString()] ? formData[index.toString()]['pokemonId'] : ""}
                                onChange={handleInputChange}>
                            {pokemonList.map((pokemon, i) => <option key={i + `-${index}`} value={pokemon.Dex}>{pokemon.Pokémon}</option>)}
                        </select>
                    </label>
                    <br/>
                    <button  onClick={(event)=> deletePokemon(event, index.toString())}>❌</button>
                </div>))}
                <button onClick={onSave}>Save</button>
            </form>
        </div>
    );
};

export default Form;
