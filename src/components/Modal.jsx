import { Component } from "react";
import './Modal.css';

class Modal extends Component {
    render() {
        return (
            <div className="message-container">
                <div className="message-card">
                    <div className="message-card-head">this.props.title</div>
                    <div className="message-card-body">this.props.message</div>
                    <div className="message-card-footer">
                        <button type="button" onChange={() => {
                          this.props.show.setState({
                            showMessage : false
                          })
                        }>Ok</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
