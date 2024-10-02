import { Component } from "react";
import "./Modal.css";

class Modal extends Component {
    render() {
        return (
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-head">{ this.props.title }</div>
                    <div className="modal-body">{ this.props.message }</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            onClick={() => {
                                this.props.show.setState({
                                    showModal: false
                                });
                            }}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Modal;
