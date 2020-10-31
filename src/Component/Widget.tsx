import React, {useEffect} from 'react';
import {useLocalStorage} from "../Util/useLocalStorage";
import {Pokemon} from "./Pokemon";
import {Link} from "react-router-dom";

const Widget = () => {
    const [team] = useLocalStorage('team', []);
    return (
        <Link to={'/'}>
            <div className="App" style={{
                display: "grid",
                width:" 100px",
                gridTemplateColumns: "64px 64px",
                gridColumnGap: "40px",
                padding: "60px"}}>
                {team.map((pokemon: { Dex: string; Nickname: string; isShiny: boolean; Type: [string];}, index: number) => <Pokemon id={pokemon.Dex} nickname={pokemon.Nickname} isShiny={pokemon.isShiny} types={pokemon.Type} key={index}/>)}
            </div>
        </Link>
    );
};

export default Widget;
