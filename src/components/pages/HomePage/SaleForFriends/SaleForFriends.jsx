import React from "react";
import "./SaleForFriends.css";
import { Box, Button } from "@mui/joy";

const SaleForFriends = () => {
  return (
    <Box className="main-sale-box">
      <Box className="sale-first-box">
        <Box className="sale-left-box">
          <h2>Приводите друзей и получайте вознаграждение!</h2>
          <p>
            Приглашайте новых пользователей, а мы начислим вам <br /> с каждой
            их покупки. Участвуйте в реферальной программе.
          </p>

          <Button
            sx={{ backgroundColor: "#3d3bff" }}
            className="connect-sale-btn"
            variant="contained"
          >
            Присоединиться
          </Button>
        </Box>

        <img
          className="main-sale-img"
          width={600}
          height={500}
          src="https://static.tildacdn.com/tild6638-3730-4534-b430-376231336232/pic-2.png"
          alt=""
        />
      </Box>

      <Box sx={{ marginTop: "10%" }} className="sale-second-box">
        <h3 style={{ fontSize: "48px" }}>
          Помогайте близким развиваться <br /> со Skillbox
        </h3>
        <p style={{ fontSize: "25px" }}>
          У вас есть друзья, которые хотят развить навыки или освоить новую{" "}
          <br />
          профессию? Помогайте знакомым получать знания с максимальной <br />{" "}
          скидкой. С нас — награда! Вот как сделать это эффективно:
        </p>

        <Box className="sale-icon-box">
          <Box className="sale-icons">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />
            <h4 style={{ fontSize: "25px" }}>
              Рекламируйте курсы Skillbox <br /> на своём сайте
            </h4>
          </Box>

          <Box className="sale-icons">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />
            <h4 style={{ fontSize: "25px" }}>
              Рассказывайте о Skillbox <br /> в соцсетях
            </h4>
          </Box>

          <Box className="sale-icons">
            <img
              src="https://static.tildacdn.com/tild6436-3638-4737-a136-303862303131/done_circle.svg"
              alt=""
            />

            <h4 style={{ fontSize: "25px" }}>
              Рекомендуйте Skillbox <br /> своим близким
            </h4>
          </Box>
        </Box>

        <Box
          className="middle-sale-box"
          sx={{
            backgroundColor: "#f4f4f4",
            display: "flex",
            width: "100%",
            height: "158px",
            marginTop: "10%",
          }}
        >
          <Box className="img-middle-box">
            <img
              src="https://static.tildacdn.com/tild3032-3236-4165-b135-633732373239/4413d3b4-1257-4ee0-8.png"
              alt=""
            />
            <img
              src="https://static.tildacdn.com/tild3838-6465-4836-b537-386363653565/6b8db83d-7114-47c6-b.png"
              alt=""
            />
          </Box>

          <h4 style={{ fontSize: "25px" }}>
            Уже зарегистрированы в реферальной программе?Перейдите в личный
            кабинет!
          </h4>

          <Button
            className="middle-sale-btn"
            sx={{
              backgroundColor: "#3d3bff",
              height: "15px",
              width: "13%",
              marginTop: "6%",
              marginRight: "4%",
            }}
            variant="contained"
          >
            Contained
          </Button>
        </Box>

        <Box
          className="sale-end-box"
          sx={{ display: "flex", paddingTop: "5%" }}
        >
          <h2 style={{ fontSize: "45px" }}>Часто задаваемые вопросы</h2>

          <Box className="big-sale-btns">
            <Button className="sale-btns">
              Как узнать какую награду я получу?
            </Button>
            <Button className="sale-btns">
              Как и куда можно вывести деньги?
            </Button>
            <Button className="sale-btns">
              Друг пришел от меня , но оставил заявку не по моей ссылке. Как
              получить познаграждение?
            </Button>
            <Button className="sale-btns">Сколько друзей можно позвать?</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SaleForFriends;
