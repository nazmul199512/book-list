import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const history = useHistory()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_pass, setConfirmPass] = useState("");



    useEffect(()=>{
     if(localStorage.getItem('user-info')){
         history.push('/')
     }

    },[])

    const signup = async (e) => {
        e.preventDefault();
        await axios
            .post(
                `http://127.0.0.1:8000/api/register`,

                {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: confirm_pass,
                }
            )
            .then((res) => {
                console.warn(res);
                localStorage.setItem("user-info",JSON.stringify(res))
                history.push('/')
            });
    };

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" id="signup_div">
                <div className="card" id="signup_card">
                    <form id="signup_form" onSubmit={signup}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password"
                                value={confirm_pass}
                                onChange={(e) => {
                                    setConfirmPass(e.target.value);
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success btn-lg btn-block signup"
                        >
                            SignUp
                        </button>
                    </form>
                    <hr />
                    <div className="">
                        Already have an account?
                        <Link to="/login">
                            <button
                                type="button"
                                style={{ width: "300px" }}
                                className="btn btn-primary btn-md login"
                            >
                                LogIn
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
};

export default SignUp;
