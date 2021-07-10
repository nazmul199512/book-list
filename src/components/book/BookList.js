import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

import { CardGroup, Card } from "react-bootstrap";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        get_books();
    }, []);

    const get_books = async () => {
        await axios.get(`http://127.0.0.1:8000/api/posts`).then((result) => {
            const data = result.data;
            setBooks(data);
        });
    };

    return (
        <div className="row" style={{ paddingTop: "2rem" }}>
          
            
                {books.map((book) => (
                    
                    <div className="col-md-3">  
                        <Book
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            slug={book.slug}
                            desc={book.description}
                            create_time = {book.updated_at}
                        />
                       </div>
                ))}
            
            
        </div>
    );
};

export default BookList;
