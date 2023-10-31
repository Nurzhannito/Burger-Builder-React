import { useState } from "react";
import {useNavigate, createSearchParams} from "react-router-dom";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 15,
  cheese: 10,
  bacon: 10,
  meat: 50
}

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0
  })

  const [totalPrice, setTotalPrice] = useState(20);
  const [purchasable, setPurchasable] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const navigate = useNavigate()
  const purchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((acc, item) => acc + item, 0)
    setPurchasable(sum > 0);
  }

  const purchaseHandler = () => {
    setIsPurchasing(true)
  }

  const purchaseCloseHandler = () => {
    setIsPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    const params = new createSearchParams(ingredients);
    navigate({
      pathname: "/checkout",
      search: "?" + params.toString(),
    })
  }

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setTotalPrice(prevState => {
      return prevState + INGREDIENTS_PRICES[type]
    })
    setIngredients(updatedIngredients);
    purchaseState(updatedIngredients);
  }

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) return
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setTotalPrice(prevState => {
      return prevState - INGREDIENTS_PRICES[type]
    })
    setIngredients(updatedIngredients);
    purchaseState(updatedIngredients);
  }

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return <>
    <Burger ingredients={ingredients} />
    <BuildControls
      purchaseHandler={purchaseHandler}
      purchasable={!purchasable}
      disabledInfo={disabledInfo}
      removeIngredientHandler={removeIngredientHandler}
      addIngredientHandler={addIngredientHandler}
      totalPrice={totalPrice}
      ingredients={ingredients} />

    <Modal show={isPurchasing} close={purchaseCloseHandler}>
      <OrderSummary
        cancelPurchase={purchaseCloseHandler}
        continuePurchase={purchaseContinueHandler}
        ingredients={ingredients} totalPrice={totalPrice} />
    </Modal>
  </>

};

export default BurgerBuilder;
