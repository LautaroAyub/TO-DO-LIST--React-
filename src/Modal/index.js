import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
  const { openModal, setOpenModal } = React.useContext(TodoContext)
  return ReactDOM.createPortal(
    <div className="ModalBackground"
      onClick={
        (event) => {
          if (event.target.className !== "ModalBackground") {
            // event.preventDefault()
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
