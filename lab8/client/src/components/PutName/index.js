import React, { useState } from 'react';
import Axios from 'axios';

const PutName = () => {

    const [additionalName, setAdditionalName] = useState("");

    const putName = (name) => {
        Axios.put("http://localhost:45030/people/" + name)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    };

    return (
        <div>
            <p>Add a name:</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }} type="text" onChange={(e) => setAdditionalName(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "8px" }} onClick={() => putName(additionalName)}>Add name</button>
        </div>
    )
};

export default PutName;
