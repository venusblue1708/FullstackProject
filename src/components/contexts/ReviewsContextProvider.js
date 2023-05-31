import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/consts";

export const reviewsContext = createContext();

export const useReviews = () => useContext(reviewsContext);

const INIT_STATE = {
  review: [],
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return { ...state, review: action.payload };

    default:
      return state;
  }
};

const ReviewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  const [courseId, setCourseId] = useState("");
  const createReviews = async (newReview) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/reviews/`, newReview, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getReviews = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/reviews/all/`, config);
      console.log(res.data);
      dispatch({ type: "GET_REVIEWS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    createReviews,
    reviews: state.review,
    getReviews,
    courseId,
    setCourseId,
  };

  return (
    <reviewsContext.Provider value={values}>{children}</reviewsContext.Provider>
  );
};

export default ReviewsContextProvider;
