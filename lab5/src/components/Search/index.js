import React, { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon'
import Team from '../Team';

const Search = () => {

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    //const [team, setTeam] = useState([]);

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

    // const addMember = () => {
    //     team.push(<TeamMember memberName={pokemon.name} memberImg={pokemon.sprites.front_default} />);
    //     setTeam(team);
    //     console.log(team);
    //     // setTeamMember(pokemon.name);
    //     // setTeamMemberImg(pokemon.sprites.front_default);
    // }

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
            {/* <button onClick={() => addMember()}>Add pokemon to your team</button> */}
            {/* <div>
                {
                    team.map(function (item, index) {
                        return <div key={item} index={index}>{item}</div>
                    })
                }
            </div> */}
        </div>
    )
};

export default Search;
