import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    // { link: "/review", element: <Reviews />, id: 4 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
