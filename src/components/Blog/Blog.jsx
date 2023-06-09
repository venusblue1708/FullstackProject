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
        <h2 class="main-statistics__title">
          Почему выбирают образовательную платформу Skillbox
        </h2>

        <ul class="main-statistics__list">
          <li class="main-statistics__item">
            <h4 class="item_title">№1</h4>
            <p class="item_text">
              По качеству обучения по версии Smart Ranking
            </p>
          </li>
          <li class="main-statistics__item">
            <h4 class="item_title">787</h4>
            <p class="item_text">
              Курсов: профессии, навыки, высшее образование и MBA
            </p>
          </li>
          <li class="main-statistics__item">
            <h4 class="item_title">24/7</h4>
            <p class="item_text">
              Учитесь с любым графиком из любой точки мира
            </p>
          </li>
          <li class="main-statistics__item">
            <h4 class="item_title">93%</h4>
            <p class="item_text">
              Окончивших курс отмечают, что Skillbox помог им достичь цели
            </p>
          </li>
        </ul>
      </Box>
      <Box className="catalog">
        <h2 class="catalog_title">Курсы под любые цели</h2>
        <Box
          className="catalog_blog_btn"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box className="catalog_blog_first">
            <h3 class="catalog_title_first">
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
            <h3 class="catalog_title_second">
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
