import bg from "../Types/pokeball-clipart-transparent-background-3.png";
import React from "react";
// @ts-ignore
import Spritesheet from 'react-responsive-spritesheet';
import PokemonTypes from "./PokemonTypes";
interface PokemonProp {
    id: string
    nickname: string
    isShiny?: boolean
    types: [string]
}
export const Pokemon = (props: PokemonProp)  =>{
    const {id, nickname, isShiny, types} = props

    return (<div style={{display: 'inline-flex', flexDirection: 'column', alignItems: "center", margin: 0, padding: 0}}>
        <p className='nickname' style={{whiteSpace: "nowrap"}}>{nickname}</p>
        <Spritesheet
            image={`./Pokemon/${id}${isShiny? "s" : ''}.png`}
            widthFrame={64}
            heightFrame={64}
            background={bg}
            backgroundSize={`cover`}
            backgroundRepeat={`no-repeat`}
            backgroundPosition={`0px 10px`}
            autoplay={true}
            steps={16}
            fps={3}
            loop={true}
        />
        {types.map(t => <PokemonTypes name={t}/>)}
    </div>)
}


