import { Component } from "react";

class Modal extends Component {
    render() {
        return (
            <div className="message-container">
                <div className="message-card">
                    <div className="message-card-head">Information</div>
                    <div className="message-card-body">You are Login.</div>
                    <div className="message-card-footer">
                        <button type="button">Ok</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
