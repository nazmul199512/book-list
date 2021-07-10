import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        await axios
            .post(`http://127.0.0.1:8000/api/login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                console.warn(res);

                setEmail("");
                setPassword("");
                localStorage.setItem("user-info", JSON.stringify(res))
                history.push("/");
            });
    };

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" id="login_div">
                <div className="card" id="login_card">
                    <form id="login_form" onSubmit={login}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control "
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control "
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block login"
                        >
                            Log In
                        </button>
                    </form>
                    <hr />
                    <div className="">
                        Don't have an account?
                        <Link to="/signup">
                            <button
                                type="button"
                                style={{ width: "300px" }}
                                className="btn btn-success btn-md signup"
                            >
                                Create New Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
};

export default Login;
