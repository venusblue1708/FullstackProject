import React, { useEffect } from "react";
import Blog from "../../Blog/Blog";
import BlogStartCarousel from "../../BlogStartCarousel/BlogStartCarousel";
import Reviews from "../../Reviews/Reviews";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const HomePage = () => {
  const { user, checkAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  return (
    <div>
      <BlogStartCarousel />
      <Blog />
      {user ? (
        <Reviews />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Typography
            sx={{
              fontSize: "56px",
              display: "flex",
              width: "40%",
              textAlign: "center",
              fontFamily: "fantasy",
            }}
          >
            Для того чтобы посмотреть отзывы, нужно авторизоваться
          </Typography>
          <Button
            sx={{
              backgroundColor: "rgb(72, 72, 196)",
              marginTop: "20px",
              color: "#ffffff",
              width: "200px",
              height: "55px",
            }}
            onClick={() => navigate("/register")}
          >
            Зарегистрироваться
          </Button>
        </Box>
      )}
    </div>
  );
};

export default HomePage;
