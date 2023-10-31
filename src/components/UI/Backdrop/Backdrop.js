import "../Backdrop/Backdrop.css";

const Backdrop = ({ show, click }) => {
    return show ? <div onClick={click} className="Backdrop"></div> : null;
};

export default Backdrop
