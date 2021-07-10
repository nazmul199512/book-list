import React from "react";
import { Button, Card } from "react-bootstrap";
const BookDetails = () => {
    return (
        <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-6 book-details">
                <Card id="book_details">
                    <Card.Img
                        variant="top"
                        src={process.env.PUBLIC_URL + "images/book1.jpg"}
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content. Some
                            quick example text to build on the card title and
                            make up the bulk of the card's content Some quick
                            example text to build on the card title and make up
                            the bulk of the card's content Some quick example
                            text to build on the card title and make up the bulk
                            of the card's content
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default BookDetails;
