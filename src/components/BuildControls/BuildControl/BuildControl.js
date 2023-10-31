import './BuildControl.css';

const BuildControl = ({ type, addIngredientHandler, removeIngredientHandler, disabledInfo }) => {
    return <>
        <div className="BuildControl">
            <div className="Label">{type}</div>
            <button
                className="Less"
                disabled={disabledInfo}
                onClick={removeIngredientHandler}>Less</button>
            <button
                className="More"
                onClick={addIngredientHandler}>More</button>
        </div>
    </>
};

export default BuildControl;