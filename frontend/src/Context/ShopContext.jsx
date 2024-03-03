import React, { useState,createContext } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null); // we had created a context to use data and functions to other components

// This function will create an empty cart,that will be an object where keys value or index will represent product id and value will represent product quantity value that we have added in the cart
const getDefaultCart = () => {
  let cart = {};//Declares a variable named cart and initializes it as an empty object. This object will be used to represent a shopping cart.
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;// it sets the quantity of the current product index in the cart object to 0. While iteration, products will display but quantitiy will be O as sets.
  }
  return cart;
};
const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());// created one usestate to store data of cartitems

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};






export default ShopContextProvider;
/* using this context, we are using the data into other component */

