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
            <>
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
                            onChange={() => {
                                if (
                                    this.state.username == "admin" &&
                                    this.state.password == "admin"
                                ) {
                                    this.setState({
                                        showMessage: true,
                                        title: "information",
                                        message: "you are login."
                                    });
                                } else {
                                    this.setState({
                                        showMessage: false,
                                        title: "warning",
                                        message:
                                            "invalid username and password."
                                    });
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
                {this.state.showMessage && (
                    <Modal
                        title={this.state.title}
                        message={this.state.message}
                        show={this}
                    />
                )}
            </>
        );
    }
}

export default Login;
