import React from 'react'

const Pokemon = (props) => {
    return (
        <div>
            <h2>{props.pokeName}</h2>
            <p>{props.pokeId}</p>
            <img src={props.pokeImg} />
        </div>
    )
};

export default Pokemon;
