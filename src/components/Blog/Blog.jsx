import { Box, Button } from "@mui/material";
import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        className="list_control"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "40px",
        }}
      >
        <h2 className="main-statistics__title">
          Почему выбирают образовательную платформу Skillbox
        </h2>

        <ul className="main-statistics__list">
          <li className="main-statistics__item">
            <h4 className="item_title">№1</h4>
            <p className="item_text">
              По качеству обучения по версии Smart Ranking
            </p>
          </li>
          <li className="main-statistics__item">
            <h4 className="item_title">787</h4>
            <p className="item_text">
              Курсов: профессии, навыки, высшее образование и MBA
            </p>
          </li>
          <li className="main-statistics__item">
            <h4 className="item_title">24/7</h4>
            <p className="item_text">
              Учитесь с любым графиком из любой точки мира
            </p>
          </li>
          <li className="main-statistics__item">
            <h4 className="item_title">93%</h4>
            <p className="item_text">
              Окончивших курс отмечают, что Skillbox помог им достичь цели
            </p>
          </li>
        </ul>
      </Box>
      <Box className="catalog">
        <h2 className="catalog_title">Курсы под любые цели</h2>
        <Box
          c
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box className="catalog_blog_first">
            <h3 className="catalog_title_first">
              Получить востребованную профессию
            </h3>

            <Button
              onClick={() => navigate("/courses")}
              className="catalog_btn"
            >
              153 профессии
            </Button>
          </Box>

          <Box className="catalog_blog_second">
            <h3 className="catalog_title_second">
              Получить новые навыки и ускорить карьеру
            </h3>
            <Button
              onClick={() => navigate("/courses")}
              className="catalog_btn"
            >
              365 курсов
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
