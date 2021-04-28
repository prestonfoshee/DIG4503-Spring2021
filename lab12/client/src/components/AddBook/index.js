import React, { useState } from 'react';
import Axios from 'axios';

const AddBook = () => {

    const [bookISBN, setBookISBN] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDesc, setBookDesc] = useState("");
    const [resultsTitle, setResultsTitle] = useState("");

    const putBook = (ISBN, title, author, desc) => {
        Axios.put("http://localhost:45030/books/" + ISBN, {
            title: bookTitle,
            author: bookAuthor,
            description: bookDesc
        })
            .then(response => {
                setResultsTitle(response.data[0].title);
                console.log(response.data[0].title);
            });
    };

    return (
        <div>
            <h3 style={{ marginTop: "0px" }}>Add a book</h3>
            <p>ISBN:</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookISBN(e.target.value)} />
            <p>Title:</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookTitle(e.target.value)} />
            <p>Author:</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookAuthor(e.target.value)} />
            <p>Description:</p>
            <input style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                type="text" onChange={(e) => setBookDesc(e.target.value)} />
            <button style={{ display: "block", margin: "auto", marginBottom: "8px" }}
                onClick={() => putBook(bookISBN, bookTitle, bookAuthor, bookDesc)}>Add</button>
            <p>Book added: {resultsTitle}</p>
        </div>
    )
}

export default AddBook;
