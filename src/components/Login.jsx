import { Component } from "react";
import Modal from "./Modal";
import "./Login.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            title: "",
            message: "",
            showModal: false
        };
    }
    render() {
        return (
            <div>
                <div className="container">
                    <main className="login-card">
                        <h1>Login</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-field"
                            onChange={e => {
                                this.setState({
                                    username: e.target.value
                                });
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-field"
                            onChange={e => {
                                this.setState({
                                    password: e.target.value
                                });
                            }}
                        />
                        <label htmlFor="rem-me">
                            <input type="checkbox" id="rem-me" />
                            <b>Remember me</b>
                            <a href="#">
                                <b>Forget Password</b>
                            </a>
                        </label>
                        <button
                            type="button"
                            className="login-btn"
                            onClick={() => {
                                this.setState({
                                    showModal: true
                                });
                                if (
                                    this.state.username.trim() == "admin" &&
                                    this.state.password.trim() == "admin"
                                ) {
                                    this.setState({
                                        title: "information",
                                        message: "you are login."
                                    });
                                } else {
                                    if (
                                        this.state.username.trim() == "" ||
                                        this.state.password.trim() == ""
                                    ) {
                                        this.setState({
                                            title: "warning",
                                            message:
                                                "username and password are required."
                                        });
                                    } else {
                                        this.setState({
                                            title: "warning",
                                            message:
                                                "invalid username and password."
                                        });
                                    }
                                }
                            }}
                        >
                            Login
                        </button>
                        <a href="#">
                            Don't have an account? <b>Register</b>
                        </a>
                    </main>
                </div>
                {this.state.showModal && (
                    <Modal
                        title={this.state.title}
                        message={this.state.message}
                        show={this}
                    />
                )}
            </div>
        );
    }
}


export default Login;
