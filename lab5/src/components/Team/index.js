import React, { useState } from 'react';

import Pokemon from '../Pokemon';

const Team = (props) => {

    const [teamMember, setTeamMember] = useState([]);

    const addMember = (props) => {
        teamMember.push(<Pokemon />);
        setTeamMember(teamMember);
    };

    return (
        <div>
            <button onClick={() => addMember()}>Add pokemon to your team</button>
            <div>
                <h1>{props.pokeName}</h1>
                <img src={props.pokeImg}></img>
            </div>
            <div>
                {
                    teamMember.map(function (item, index) {
                        return <div key={item} index={index}>{item}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Team;
