/* eslint-disable react/prop-types */

const Modal = ({ children, className, id }) => {
  return (
    <dialog id={id} className={`modal ${className}`}>
      {children}
    </dialog>
  );
};

export default Modal;
