import axios from "axios";

import { createContext, useContext, useReducer, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { API } from "../helpers/consts";

export const coursesContext = createContext();

export const useCourses = () => useContext(coursesContext);

const INIT_STATE = {
  courses: [],
  oneCourse: null,
  categories: [],
  mentors: [],
  language: [],
  pages: 0,
  likes: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload.results,
        pages: Math.ceil(action.payload.count / 6),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_MENTORS":
      return { ...state, mentors: action.payload };
    case "GET_LANGUAGES":
      return { ...state, language: action.payload };
    case "GET_ONE_COURSE":
      return { ...state, oneCourse: action.payload };

    case "GET_ONE_CATEGORY":
      return { ...state, oneCategory: action.payload };
    case "ADD_LIKE":
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};

const CoursesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const navigate = useNavigate();

  const getCourses = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(
        `${API}/courses/${window.location.search}`,
        config
      );
      dispatch({ type: "GET_COURSES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/categories/all/`, config);

      dispatch({ type: "GET_CATEGORIES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getLanguage = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/languages/all/`, config);

      dispatch({ type: "GET_LANGUAGES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  const createCourse = async (newProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/courses/`, newProduct, config);

      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  //! delete
  const deleteCourse = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/courses/${id}/`, config);
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const getOneCourse = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/courses/${id}/`, config);
      dispatch({ type: "GET_ONE_COURSE", payload: res.data });
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };
  const addLike = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/courses/${id}/like/`, config);
      dispatch({ type: "ADD_LIKE", payload: res.data });
      getCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async (id, editedCourse) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      console.log("hello");
      await axios.patch(`${API}/courses/${id}/`, editedCourse, config);
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;

    navigate(url);
  };

  // !ourMentors

  const getMentors = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/mentors/`, config);
      console.warn(res);
      dispatch({ type: "GET_MENTORS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const createMentors = async (newMentor) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.post(`${API}/mentors/`, newMentor, config);
      navigate("/mentors");
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getCategories,
    updateCourse,
    createCourse,
    getCourses,
    courses: state.courses,
    deleteCourse,
    getOneCourse,
    getMentors,
    mentor: state.mentors,
    getLanguage,
    languages: state.language,
    oneCourse: state.oneCourse,
    categories: state.categories,
    search,
    setSearch,
    searchParams,
    setSearchParams,
    fetchByParams,
    pages: state.pages,
    createMentors,
    addLike,
  };

  return (
    <coursesContext.Provider value={values}>{children}</coursesContext.Provider>
  );
};

export default CoursesContextProvider;
