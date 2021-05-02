import React, { useState } from 'react';
import Axios from 'axios';

const MovieCount = () => {

    const [count, setCount] = useState();

    const getCount = () => {
        Axios.get("http://localhost:45030/count")
            .then(response => {
                setCount(response.data.count);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    return (
        <div>
            {getCount()}
            <p>Number of movies in your list: {count}</p>
        </div>
    )
}

export default MovieCount;
