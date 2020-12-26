import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div
      //allow to go back to the home page on click on the grey part of the screen
      onClick={onDismiss}
      className="modal__overlay"
    >
      <div
        //protect the div and its children from the onclick event of the parent div
        onClick={(e) => e.stopPropagation()}
        className="modal__container"
      >
        <div className="modal__header">{title}</div>
        <div className="modal__content">{content}</div>
        <div className="modal__actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
