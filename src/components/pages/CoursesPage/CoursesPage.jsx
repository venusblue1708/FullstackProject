import React, { useEffect } from "react";
import SideBar from "../../courses/SideBar";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/joy";
import CourseList from "../../courses/CourseList/CourseList";
import { useAuth } from "../../contexts/AuthContextProvider";
import img from "./img/free-icon-font-id-card-clip-alt-9856425.svg";
import "./CoursesPage.css";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const { user, checkAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  return (
    <>
      {user ? (
        <Box sx={{ display: "flex" }}>
          <Grid sx={{ display: "flex" }}>
            <Grid item md={3}>
              <SideBar />
            </Grid>
            <Grid sx={{ display: "flex" }} item md={8}></Grid>
            <CourseList />
          </Grid>
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "56px",
              display: "flex",
              marginTop: "10%",
              width: "40%",
              textAlign: "center",
              fontFamily: "fantasy",
            }}
          >
            Для того чтобы посмотреть наши курсы, нужно авторизоваться
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "10%" }}
          >
            <img src={img} width={150} style={{ marginLeft: "55px" }} />
            <Button onClick={() => navigate("/register")} id="reg_btn">
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CoursesPage;
