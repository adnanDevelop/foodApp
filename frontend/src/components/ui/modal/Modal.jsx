import React from "react";

const Modal = ({ children, className }) => {
  return (
    <dialog id="my_modal_1" className={`modal ${className}`}>
      {children}
    </dialog>
  );
};

export default Modal;
