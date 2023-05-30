import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import { getCountProductsInCart } from "../helpers/consts";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  // cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_CART_LENGTH":
      return { ...state, cartLength: action.payload };
    case "ORDERING_GET_CART":
      return { ...state, ordering: action.payload };
    default:
      return state;
  }
}
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ courses: [] }));
      cart = { courses: [] };
    }

    dispatch({ type: "GET_CART", payload: cart });
  };

  const addProductToCard = (course) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { courses: [] };
    }
    let newProduct = {
      item: course,
      count: 1,
    };

    let productToFind = cart.courses.filter(
      (elem) => elem.item.id === course.id
    );

    if (productToFind.length === 0) {
      cart.courses.push(newProduct);
    } else {
      cart.courses = cart.courses.filter((elem) => elem.item.id != course.id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.courses = cart.courses.map((courses) => {
      if (courses.item.id == id) {
        if (count >= 0) {
          courses.count = count;
        }
      }
      return courses;
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({ type: "GET_CART", payload: cart });
  };

  function deleteCartProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.courses = cart.courses.filter((elem) => elem.item.id != id);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  const values = {
    getCart,
    cart: state.cart,
    addProductToCard,
    changeProductCount,
    deleteCartProduct,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
