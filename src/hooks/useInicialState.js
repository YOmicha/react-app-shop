import { useState } from "react";


const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addTocart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removecart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }

    return {
        state,
        addTocart,
        removecart
    }
};

export default useInitialState;