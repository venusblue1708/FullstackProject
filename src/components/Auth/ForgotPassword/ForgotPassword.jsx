import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/joy";

const ForgotPassword = () => {
  const { handlePassword } = useAuth();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleSave = (e) => {
    if (!email) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);

      handlePassword(formData);
    }
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          height: "30vw",
          width: "30vw",
          margin: "7vh auto",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "29px",
        }}
      >
        <h2 style={{ fontSize: "23px" }}>Восстановление пароля</h2>
        <p style={{ fontSize: "15.5px", fontFamily: "monospace" }}>
          Укажите, куда отправить инструкции для восстановления пароля.
        </p>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="outlined-basic"
          label="Элетронная почта"
          variant="outlined"
          fullWidth
          sx={{ margin: "8px" }}
        />
        <Button
          onClick={() => {
            handleSave();
            navigate("/password_reset");
          }}
          className="login_button"
          sx={{
            color: "white",
            backgroundColor: "grey",
            width: "25vw",
            borderRadius: "23px",
            fontSize: "14px",
            marginTop: "15px",
          }}
          size="large"
        >
          Отправить
        </Button>
        <Button
          onClick={() => navigate("/login")}
          sx={{
            border: "2px solid grey",
            width: "25vw",

            borderRadius: "23px",
            fontSize: "13px",
            color: "grey",
          }}
        >
          У вас уже есть профиль ? Войдите
        </Button>
      </Box>

      <Box
        sx={{
          width: "40vw",
          margin: "5vh auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "34px", fontFamily: "inherit" }}>
          Узнавайте новое на Skillbox
        </h1>
        <p style={{ fontSize: "18.6px", fontFamily: "monospace" }}>
          Авторизуйтесь, чтобы начать заниматься
        </p>
        <img
          src="https://go.skillbox.ru/assets/img/3d/auth-login.png"
          alt=""
          width={630}
        />
      </Box>
    </Box>
  );
};

export default ForgotPassword;
