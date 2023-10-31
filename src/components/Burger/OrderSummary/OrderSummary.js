import Button from "../../UI/Button/Button";

const OrderSummary = ({ ingredients, totalPrice, cancelPurchase, continuePurchase, }) => {
    const ingredientsSummary = Object.keys(ingredients).map(igKey => {
        const amount = ingredients[igKey]
        return <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {amount}
        </li>
    })
    return <>
        <div>
            <h3>Your order summary</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: <strong>{totalPrice}</strong></p>
            <p>Continue to checkout ?</p>
            <Button
                onClick={cancelPurchase}
                btnType="Danger">Cancel</Button>
            <Button
                onClick={continuePurchase}
                btnType="Success">Continue</Button>
        </div>
    </>
};

export default OrderSummary
