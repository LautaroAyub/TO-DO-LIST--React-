import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"

function Modal({ children, setOpenModal }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground"
      onClick={
        (event) => {
          if (event.target.className !== "ModalBackground") {
            return;
          }
          setOpenModal(false)
        }}
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
