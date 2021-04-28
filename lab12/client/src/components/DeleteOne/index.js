import React, { useState } from 'react';
import Axios from 'axios';

const DeleteOne = () => {

    const [bookISBN, setBookISBN] = useState("");
    const [resultNum, setResultNum] = useState();

    const deleteBook = (ISBN) => {
        Axios.delete("http://localhost:45030/books/" + ISBN)
            .then(response => {
                setResultNum(response.data.deleted);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    };

    return (
        <div>
            <h3>Delete book by ISBN</h3>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookISBN(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "30px" }}
                onClick={() => deleteBook(bookISBN)}>Delete</button>
            {
                (resultNum === 0) ? (

                    <p>Book not found</p>
                )
                    : (
                        <p>Number of deleted books: {resultNum}</p>
                    )
            }
        </div>
    )
}

export default DeleteOne;
