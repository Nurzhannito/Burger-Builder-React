import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";

const CheckoutSummary = ({ ingredients, cancelCheckout, continueCheckout }) => {
    return <>
        <div className="CheckoutSummary">
            <h1>We hope it tastes well</h1>
            <div style={{ width: '100%', margin: `auto` }}>
                <Burger ingredients={ingredients} />
            </div>
            <Button onClick={cancelCheckout} btnType="Danger">Cancel</Button>
            <Button onClick={continueCheckout} btnType="Success">Continue</Button>
        </div>
    </>
};

export default CheckoutSummary