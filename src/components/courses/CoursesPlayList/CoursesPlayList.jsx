import { Box, Button } from "@mui/material";
import React from "react";
import "./CoursesPlayList.css";

const CoursesPlayList = () => {
  return (
    <Box className="play" sx={{ display: "flex", marginLeft: "15%" }}>
      <Box>
        <h1
          className="play_title"
          style={{ fontSize: "53px", marginTop: "10%" }}
        >
          Плейлисты
        </h1>
        <Box sx={{ marginTop: "10%" }}>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h1>Програмирование</h1>{" "}
            <h4 style={{ marginLeft: "50%", marginTop: "4%" }}>
              14 плейлистов
            </h4>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2 className="hh">Python</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              17 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2 className="programm">Програмирование с нуля</h2>
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              10 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Уроки "1C"</h2>
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              10 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Создание сайтов</h2>
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              12 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Android</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              8 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Java</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              8 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>C++</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              3 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>JavaScript</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              5 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>DevOps</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              5 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>IOS-разработка</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              6 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>SQL</h2>{" "}
            <Button
              style={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Язык Go</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Администрирование Linux</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              3 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Data Science</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              8 Видео
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="play_list" sx={{ display: "flex", marginTop: "10%" }}>
            <h1>Дизайн</h1>{" "}
            <h4 style={{ marginLeft: "60%", marginTop: "3%" }}>
              13 плейлистов
            </h4>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Веб-дизайн с нуля</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              9 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Photoshop</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              10 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Cinema 4D</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              3 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Акварельная живопись</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              9 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Дизайн интерьера</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              19 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Скетчинг</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              3 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Графический дизайн</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              15 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Фотография</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              11 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>UX/UI-дизайн</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              14 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Adobe Illustrator</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              6 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Кройка и шитье</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Ландшафтный дизайн</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              5 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Дизайн одежды</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="play_list" sx={{ display: "flex", marginTop: "10%" }}>
            <h1>Маркетинг</h1>{" "}
            <h4 style={{ marginLeft: "60%", marginTop: "3%" }}>7 плейлистов</h4>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Контекстная реклама</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              5 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>SMM</h2>{" "}
            <Button
              style={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              11 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Интернет-маркетинг с нуля</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              14 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Таргетированная реклама</h2>{" "}
            <Button
              style={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              13 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Торговля на Маркетлейсах</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              3 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>SEO</h2>{" "}
            <Button
              style={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Копирайтинг</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="play_list" sx={{ display: "flex", marginTop: "10%" }}>
            <h1>Управление</h1>{" "}
            <h4 style={{ marginLeft: "60%", marginTop: "3%" }}>7 плейлистов</h4>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Soft Skills</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              13 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Hr</h2>{" "}
            <Button
              style={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              11 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Управление проектами</h2>{" "}
            <Button
              style={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              7 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Управление продажами</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              12 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Менеджер проектов</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              9 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Excel + Google-таблицы с нуля до PRO</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              8 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Инвестиции</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
        </Box>
        <Box>
          <Box className="play_list" sx={{ display: "flex", marginTop: "10%" }}>
            <h1>Игры</h1>{" "}
            <h4 style={{ marginLeft: "60%", marginTop: "3%" }}>6 плейлистов</h4>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Unreal Engine 4</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              9 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>3D-моделирование</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              26 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>2D- и 3D-графика</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              16 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Unity</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              21 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>Blender</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              4 Видео
            </Button>
          </Box>
          <Box className="play_list" sx={{ display: "flex" }}>
            <h2>2D графика и линейный рисунок</h2>{" "}
            <Button
              sx={{ marginTop: "10px", marginLeft: "45%", color: "black" }}
            >
              5 Видео
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesPlayList;
