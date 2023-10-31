import "../Button/Button.css";

const Button = ({ onClick, btnType, children }) => {
    return <button
        onClick={onClick}
        className={["Button", btnType].join(" ")}>{children}</button>;
};

export default Button
