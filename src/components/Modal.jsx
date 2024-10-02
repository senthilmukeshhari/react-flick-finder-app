import { Component } from "react";

class Modal extends Component {
    render() {
        return (
            <div class="message-container">
                <div class="message-card">
                    <div class="message-card-head">Information</div>
                    <div class="message-card-body">You are Login.</div>
                    <div class="message-card-footer">
                        <button type="button">Ok</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;




