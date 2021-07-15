import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [slug, setSlug] = useState("");
    const [desc, setDesc] = useState("");

    const add_book = async (e) => {
        e.preventDefault();
        await axios
            .post(
                `http://127.0.0.1:8000/api/posts`,

                {
                    title: title,
                    author: author,
                    slug: slug,
                    description: desc,
                }
            )
            .then((res) => {
                setTitle("");
                setAuthor("");
                setSlug("");
                setDesc("");

                history.push("/");
            });
    };

    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6" id="addbook_div">
                <div className="card" id="addbook_card">
                    <form id="addbook_form" onSubmit={add_book}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary book-btn"
                        >
                            Add Book To List
                        </button>
                    </form>
                    <hr />
                    <div className="">
                        Don't wanna add a book? Back to {""}
                        <Link to="/" id="book">
                            <strong>home</strong>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default AddBook;
