import React from "react";
import { Link } from "react-router-dom";
import { CardGroup, Card } from "react-bootstrap";
const Book = (props) => {
    return (
        <>
            <CardGroup>
                <Card id="booklist_card">
                    <Link className="nav-link" to='/book-details'>
                        <Card.Img
                            variant="top"
                            src={process.env.PUBLIC_URL + "images/book.jpg"}
                        />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>

                            <Card.Text>By {props.author}</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            </CardGroup>
            <hr />
        </>
    );
};

export default Book;

// to={`/book-details/${props.id}`}
