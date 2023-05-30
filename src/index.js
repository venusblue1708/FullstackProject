import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CoursesContextProvider from "./components/contexts/CoursesContextProvider";
import AuthContextProvider from "./components/contexts/AuthContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <AuthContextProvider>
        <CoursesContextProvider>
          <App />
        </CoursesContextProvider>
      </AuthContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
