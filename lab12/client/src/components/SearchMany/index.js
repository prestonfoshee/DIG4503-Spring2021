import React, { useState } from 'react';
import Axios from 'axios';

const SearchMany = () => {

    const [bookTitle, setBookTitle] = useState("");
    const [resultsTitle, setResultsTitle] = useState("");
    const [resultsAuthor, setResultsAuthor] = useState("");

    const bookSearch = (title) => {
        Axios.post("http://localhost:45030/books/search", null, {
            params: {
                title: title
            }
        })
            .then(response => {
                console.log(response.data.books[0].title);
                setResultsTitle(response.data.books[0].title);
                setResultsAuthor(response.data.books[0].author);
            })
            .catch(error => {
                console.log("Error: " + error);
                setResultsTitle(undefined);
            })
    };

    return (
        <div>
            <h3>Search books by title</h3>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookTitle(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "30px" }}
                onClick={() => bookSearch(bookTitle)}>Search</button>
            {
                (resultsTitle !== undefined || "") ? (
                    <div>
                        <p>Title: {resultsTitle}</p>
                        <p>Author: {resultsAuthor}</p>
                    </div>

                ) : (
                    <div>
                        <p>Not found</p>
                    </div>
                )
            }
        </div>
    )
}

export default SearchMany;
