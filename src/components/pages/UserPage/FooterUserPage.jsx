import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import "./UserPage.css";
const FooterUserPage = () => {
  return (
    <Box
      className="user_page_footer"
      sx={{
        marginTop: "60px",
        marginLeft: "160px",
        marginRight: "40px",
        marginBottom: "70px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h4 style={{ fontFamily: "monospace" }}>© Skillbox, 2023</h4>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button>
            <a href="https://translate.google.com/">
              <TranslateIcon
                sx={{
                  color: "black",
                  border: "1px solid grey",
                  marginTop: "10px",
                }}
              />
            </a>
          </Button>
        </Box>
      </Box>
      <Box className="footer_box_control" sx={{ width: "80%" }}>
        <p className="first_para" style={{ fontSize: "13px" }}>
          Образовательные услуги оказываются ЧОУ ДПО «Образовательные технологии
          «Скилбокс (Коробка навыков)» на основании Лицензии №
          Л035-01298-77/00179609 от 19 января 2022 года
        </p>
        <p
          className="second_para"
          style={{
            fontSize: "12px",
            width: "63%",
            color: "grey",
          }}
        >
          В материалах курса, видео, презентации упоминаются социальные сети
          Фейсбук / Инстаграм, принадлежащие Meta Platforms Inc., деятельность
          которой запрещена на территории РФ в части реализации данных
          социальных сетей на основании осуществления ею экстремистской
          деятельности
        </p>
      </Box>
    </Box>
  );
};

export default FooterUserPage;
