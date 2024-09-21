import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } 
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    deliveryFee,
    currency,
    setSearch,
    search,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
