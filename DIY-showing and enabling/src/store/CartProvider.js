import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = props =>{
    let [isItems, setIsItems] = useState([]);
    const addItemHandler= (item)=>{
        setIsItems([...isItems, item])
    };
    const removeItemHandler = (id)=>{};

    const removeItemHandler = (item)=>{
        setIsItems([...isItems,item])
    };
    const cartContext = {
        items:isItems,
        totalAMount:0,
        addItem: addItemHandler,
        removeItemHandler: (id)=> {}
        removeItem: removeItemHandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;