import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData);
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
  };

  const handleActive = async (code) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/activate/`, code);
      navigate("/login");
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      console.log(res.data);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setUser(email);
    } catch (error) {
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };
  const handlePassword = async (email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/password_reset/`, email);
    } catch (error) {
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };
  const handleChangePassword = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.put(`${API}/accounts/password_reset/`, formData);
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setUser(null);
    navigate("/login");
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/accounts/refresh/`, {
        refresh: tokens.refresh,
        config,
      });

      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: res.data.refresh })
      );

      const email = localStorage.getItem("email");
      setUser(email);
    } catch (error) {
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const values = {
    handleRegister,
    handleLogin,
    loading,
    error,
    setError,
    handleLogout,
    user,
    checkAuth,
    handleActive,
    handlePassword,
    handleChangePassword,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
