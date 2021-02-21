import React, { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon'

const Search = () => {

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const searchPoke = () => {

        setLoading(true);

        Axios('https://pokeapi.co/api/v2/pokemon/' + search)
            .then((response) => {
                setPokemon(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <input style={{ marginBottom: "10px" }} type="input" onChange={(e) => {
                setSearch(e.target.value);
            }} />
            <br></br>
            <button onClick={() => searchPoke()}>Search</button>
            {
                <p>Searched: {search}</p>
            }
            {
                (loading === true) ? (
                    <p>Not found!</p>
                ) : (
                        <div>
                            <Pokemon pokeName={pokemon.name} pokeId={pokemon.id} pokeImg={pokemon.sprites.front_default} />
                        </div>
                    )
            }
        </div>
    )
}

export default Search;
