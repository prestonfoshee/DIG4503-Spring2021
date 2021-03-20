import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

const GetName = () => {

    const [searchNameFilter, setSearchNameFilter] = useState("");
    const [searchResultsFilter, setSearchResultsFilter] = useState([]);
    const [searchNameExact, setSearchNameExact] = useState("");
    const [searchResultsExact, setSearchResultsExact] = useState("");

    const filterNames = (name) => {
        Axios.get("http://localhost:45030/search/" + name)
            .then(response => {
                console.log(response.data);
                setSearchResultsFilter(response.data.name);
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    };

    const exactNames = (name) => {
        Axios.get("http://localhost:45030/people/" + name)
            .then(response => {
                console.log(response.data);
                setSearchResultsExact(response.data.name);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    };


    return (
        <div>
            <p>Search for names containing specific charcter(s):</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }} type="text" onChange={(e) => setSearchNameFilter(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "30px" }} onClick={() => filterNames(searchNameFilter)}>Search names</button>
            {
                searchResultsFilter.map((value, index) => {
                    return <p key={index}>{value}</p>
                })
            }

            <p>Search for exact names:</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }} type="text" onChange={(e) => setSearchNameExact(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "30px" }} onClick={() => exactNames(searchNameExact)}>Search names</button>
            <p>{searchResultsExact}</p>
        </div>
    )
};

export default GetName;
