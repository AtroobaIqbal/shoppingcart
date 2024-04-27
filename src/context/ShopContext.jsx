import React, { createContext, useState } from 'react'
import {PRODUCTS} from '../Products'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++){
  cart [i] = 0;
  return cart;
  }
}
export const ShopContextProvider = (props) => {
    const [cartitems , setcartitems] = useState(getDefaultCart()) 
    const addToCart = (itemId) => {
      setcartitems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => {
      setcartitems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
    const contextValue = {cartitems , addToCart , removeFromCart};
    console.log(cartitems)
  return (
    <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
  )
}

