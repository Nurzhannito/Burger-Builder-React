import { useState, useRef } from "react";
import { useSearchParams, useNavigate, Outlet } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const parseSearch = (searchParams) => {
    return Object.fromEntries(searchParams)
}

const CheckOut = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    // const [ingredients, setIngredients] = useState({
    //     salad: 0,
    //     cheese: 0,
    //     bacon: 0,
    //     meat: 0
    // })

    const parsedParseSearch = parseSearch(searchParams);
    const ingredientsRef = useRef(parsedParseSearch);
    const arr = [];

    const cancelCheckout = () => {
        navigate(-1)
    }

    const continueCheckout = () => {
        navigate("contact-data", { state: { ingredients: ingredientsRef.current } })
    }

    return <>
        <CheckoutSummary
            cancelCheckout={cancelCheckout}
            ingredients={ingredientsRef.current} 
            continueCheckout={continueCheckout}/>
        <Outlet/>
    </>
};

export default CheckOut
