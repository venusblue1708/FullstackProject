import { Box } from "@mui/joy";
import React, { useState } from "react";
import "./Footer.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import renetLogo from "../images/Снимок экрана 2023-04-12 141724.png";

const Footer = () => {
  return (
    <Box className="wrapper-footer">
      <div class="first-footer-box">
        <div class="second-footer-box">
          <Box className="help-box">
            <div class="help-box-parg">
              <h2 class="footer_title">Поможем в выборе!</h2>
              <p class="footer_text">
                Если у вас вопросы о формате или вы не знаете, <br /> что
                выбрать, оставьте свой номер - мы позвоним, <br /> чтобы
                ответить на все ваши вопросы.
              </p>
            </div>
            <Box className="help-box-inp">
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Имя"
                variant="outlined"
              />

              <TextField
                className="text-field"
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                sx={{ marginLeft: "2%" }}
              />

              <TextField
                className="text-field"
                id="outlined-basic"
                label="Телефон"
                variant="outlined"
              />

              <div class="btn-box">
                <p>
                  нажимая на кнопку, я соглашаюсь на <br />
                  <a href="">обработку персоналных данных</a>
                </p>
                <Button className="btn-footer" variant="contained">
                  Отправить
                </Button>
              </div>
            </Box>
          </Box>
        </div>

        <div class="footer-end-side">
          <div class="footer-end-p">
            <p>+996 312 900-540</p>
            <p>Контактный центр</p>
          </div>

          <div class="footer-end-email">
            <p>hello@skillbox.kg</p>
          </div>
        </div>
        <hr />

        <div class="footer-finished-side">
          <div class="footer-finished-right">
            <p>
              Платежная информация Публичный договор Политика конфиденциальности
            </p>

            <p>© Skillbox, 2023</p>
          </div>

          <div class="footer-finished-left">
            Мы используем файлы cookie, для персонализации сервисов и повышения
            удобства <br /> пользования сайтом. Если вы не согласны на их
            использование, поменяйте настройки браузера.
            <div class="icon-footer-end">
              <img width={30} src={renetLogo} alt="" />
              <p>Премии Рунета 2018, 2019, 2020, 2021, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
