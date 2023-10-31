import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const BuildControls = ({ ingredients, totalPrice, addIngredientHandler, removeIngredientHandler, disabledInfo, purchasable, purchaseHandler }) => {
    return <>
        <div className="BuildControls">
            <p>Current price: <strong>{totalPrice}</strong></p>
            {Object.keys(ingredients).map(igKey => {
                return <BuildControl
                    key={igKey}
                    type={igKey}
                    disabledInfo={disabledInfo[igKey]}
                    addIngredientHandler={() => addIngredientHandler(igKey)}
                    removeIngredientHandler={() => removeIngredientHandler(igKey)} />
            })}

            <button
                disabled={purchasable}
                onClick={purchaseHandler}
                className="OrderButton">Order now</button>
        </div>
    </>
};

export default BuildControls;