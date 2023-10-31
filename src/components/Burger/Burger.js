import './Burger.css';
import Ingredient from './Ingredient/Ingredient';
import { v4 as uuid } from "uuid";

const Burger = ({ ingredients }) => {
    const ingredientsKeys = Object.keys(ingredients);
    let igList = [];

    ingredientsKeys.forEach(igKey => {
        const amount = ingredients[igKey];
        for (let i = 0; i < amount; i++) {
            igList.push(<Ingredient type={igKey} key={uuid()} />)
        }
    })

    if(!igList.length) {
        igList = [<p key={uuid()}>Please start adding ingredients</p>]
    }

    return <>
        <div className="Burger">
            <Ingredient type="bread-top" />
            {igList}
            <Ingredient type="bread-bottom" />
        </div>
    </>
};

export default Burger;