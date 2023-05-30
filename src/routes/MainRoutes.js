import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import AboutUs from "../components/AboutUs/AboutUs";
import Sale from "../components/pages/SalesPage/Sale";
import CommunitySkillbox from "../components/pages/CommunitySkillboxPage/CommunitySkillbox";
import UserPage from "../components/pages/UserPage/UserPage";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Active from "../components/Auth/Active";
import ForgotPassword from "../components/Auth/ForgotPassword/ForgotPassword";
import PasswordChange from "../components/Auth/PasswordChange/PasswordChange";
import CoursesPlayList from "../components/courses/CoursesPlayList/CoursesPlayList";
import SaleForFriends from "../components/pages/SaleForFriends/SaleForFriends";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/aboutus", element: <AboutUs />, id: 2 },
    // { link: "/review", element: <Reviews />, id: 4 },
    { link: "/sale", element: <Sale />, id: 5 },
    { link: "/community", element: <CommunitySkillbox />, id: 9 },
    { link: "/saleForFriends", element: <SaleForFriends />, id: 10 },
    { link: "/user", element: <UserPage />, id: 11 },
    { link: "/login", element: <Login />, id: 14 },
    { link: "/register", element: <Register />, id: 15 },
    { link: "/active", element: <Active />, id: 16 },
    { link: "/password", element: <ForgotPassword />, id: 17 },
    { link: "/password_reset", element: <PasswordChange />, id: 18 },
    { link: "/playlist", element: <CoursesPlayList />, id: 12 },
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
