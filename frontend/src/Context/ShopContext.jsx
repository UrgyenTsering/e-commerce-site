import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null); // we had created a context to use data and functions to other components
const ShopContextProvider = (props) => {
  // created a function which holds the data and functions
  const contextValue = { all_product }; // this varaible holds all the data and function stored in all_product file

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
/* using this context, we are using the data into other component */

