import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";

const Nav = (props) => {
    const user = JSON.parse(localStorage.getItem("user-info"));
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            history.push("/login");
        }
    }, []);

    const logout = async () => {
        localStorage.clear();

        history.push("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark ">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    BookList
                </NavLink>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                >
                    {localStorage.getItem("user-info") ? (
                        <>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <NavLink
                                        className="nav-link"
                                        to="/add-book"
                                    >
                                        Add Book
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="form-inline my-2 my-lg-0">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavDropdown
                                            title={user.data.user.name}
                                        >
                                            <NavDropdown.Item>
                                                Your list
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={logout}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active"></li>
                            </ul>

                            <div className="form-inline my-2 my-lg-0">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/login"
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
