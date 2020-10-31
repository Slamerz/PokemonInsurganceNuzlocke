import React from 'react';

interface PokemonTypesProps {
    name: string
}
const PokemonTypes = (props: PokemonTypesProps) => {
    const {name} = props
    const style = (n:string) =>{
        let color = ''

        switch (n.toLowerCase()) {
            case "normal": {
                color = "#a0a0a0"
                break;
            }
            case "poison": {
                color = "#812eca"
                break
            }
            case "psychic": {
                color = "#ff52eb"
                break
            }
            case "grass": {
                color = "#2c9100"
                break
            }
            case "ground": {
                color = "#b59d4c"
                break
            }
            case "ice": {
                color = "#34ffd8"
                break
            }
            case "fire": {
                color = "#fd2525"
                break
            }
            case "rock": {
                color = "#7c3600"
                break
            }
            case "dragon": {
                color = "#8271fd"
                break
            }
            case "water": {
                color = "#54abfe"
                break
            }
            case "bug": {
                color = "#c0d020"
                break
            }
            case "dark": {
                color = "#8b6755"
                break
            }
            case "fighting": {
                color = "#efeff0"
                break
            }
            case "ghost": {
                color = "#6b68bd"
                break
            }
            case "steel": {
                color = "#bfbed7"
                break
            }
            case "flying": {
                color = "#8ca9b1"
                break
            }
            case "electric": {
                color = "#ffcb00"
                break
            }
            case "fairy": {
                color = "#f7abfe"
                break
            }
        }

        return { backgroundColor: color, }
    }

    return (
        <div style={style(name)} className='typeText'>{name.toUpperCase()}</div>
    );
};

export default PokemonTypes;
