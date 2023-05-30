import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import AboutUs from "../components/AboutUs/AboutUs";
import SaleForFriends from "../components/pages/HomePage/SaleForFriends/SaleForFriends";
import Sale from "../components/pages/SalesPage/Sale";
import CommunitySkillbox from "../components/pages/CommunitySkillboxPage/CommunitySkillbox";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/aboutus", element: <AboutUs />, id: 2 },
    // { link: "/review", element: <Reviews />, id: 4 },
    { link: "/sale", element: <Sale />, id: 5 },
    { link: "/community", element: <CommunitySkillbox />, id: 9 },
    { link: "/saleForFriends", element: <SaleForFriends />, id: 10 },
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
