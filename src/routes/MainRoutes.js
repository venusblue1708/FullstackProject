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
import CoursesPage from "../components/pages/CoursesPage/CoursesPage";
import AdminPage from "../components/pages/AdminPage/AdminPage";
import EditCourse from "../components/courses/EditCourse/EditCourse";
import AddReview from "../components/AddReview/AddReview";
import Reviews from "../components/Reviews/Reviews";
import Ordering from "../components/Ordering/Ordering";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/aboutus", element: <AboutUs />, id: 2 },
    { link: "/sale", element: <Sale />, id: 3 },
    { link: "/community", element: <CommunitySkillbox />, id: 4 },
    { link: "/saleForFriends", element: <SaleForFriends />, id: 5 },
    { link: "/user", element: <UserPage />, id: 6 },
    { link: "/login", element: <Login />, id: 7 },
    { link: "/register", element: <Register />, id: 8 },
    { link: "/active", element: <Active />, id: 9 },
    { link: "/password", element: <ForgotPassword />, id: 10 },
    { link: "/password_reset", element: <PasswordChange />, id: 11 },
    { link: "/playlist", element: <CoursesPlayList />, id: 12 },
    { link: "/courses", element: <CoursesPage />, id: 13 },
    { link: "/edit/:id", element: <EditCourse />, id: 14 },
    { link: "/review", element: <Reviews />, id: 15 },
    { link: "/add-review", element: <AddReview />, id: 16 },
    { link: "/ordering", element: <Ordering />, id: 17 },
  ];
  const PRIVATE_ROUTES = [{ link: "/admin", element: <AdminPage />, id: 18 }];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {PRIVATE_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
