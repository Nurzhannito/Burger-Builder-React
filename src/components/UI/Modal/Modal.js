import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = ({ children, show, close }) => {
    return <>
        <div
            style={{ transform: `translateY(${show ? 0 : "-100vh"})`, opacity: show ? 1 : 0 }}
            className="Modal">
            {children}
        </div>
        <Backdrop show={show} click={close}/>
    </>;
};

export default Modal
