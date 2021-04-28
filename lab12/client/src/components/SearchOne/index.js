import React, { useState } from 'react';
import Axios from 'axios';

const SearchOne = () => {

    const [bookISBN, setBookISBN] = useState("");
    const [searchResultsTitle, setSearchResultsTitle] = useState("");
    const [searchResultsAuthor, setSearchResultsAuthor] = useState("");

    const bookSearch = (ISBN) => {
        Axios.get("http://localhost:45030/books/" + ISBN)
            .then(response => {
                setSearchResultsTitle(response.data.title);
                setSearchResultsAuthor(response.data.author);
                console.log(searchResultsTitle);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    return (
        <div>
            <h3>Search books by ISBN</h3>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookISBN(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "30px" }}
                onClick={() => bookSearch(bookISBN)}>Search</button>
            {
                (searchResultsTitle !== undefined || "") ? (
                    <div>
                        <p>Title: {searchResultsTitle}</p>
                        <p>Author: {searchResultsAuthor}</p>
                    </div>

                ) : (
                    <div>
                        <p>No books found</p>
                    </div>
                )
            }
        </div>
    )
}

export default SearchOne;
