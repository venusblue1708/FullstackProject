import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Box, Button, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const PasswordChange = () => {
  const { handleChangePassword } = useAuth();
  const [passwordResetCode, setPasswordResetCode] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    if (!passwordResetCode || !password || !passwordAgain) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("password_reset_code", passwordResetCode);
      formData.append("password", password);
      formData.append("password2", passwordAgain);
      handleChangePassword(formData);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        <h2 style={{ fontFamily: "inherit" }}> Придумайте пароль</h2>
        <TextField
          onChange={(e) => setPasswordResetCode(e.target.value)}
          type="number"
          id="outlined-basic"
          label="Код от почты"
          variant="outlined"
          fullWidth
          sx={{ margin: "5px" }}
        />
        <FormControl
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="outlined-basic"
          label="Password-confirmation"
          variant="outlined"
          fullWidth
          sx={{ margin: "5px" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Новый пароль
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password-confirm"
          />
        </FormControl>
        <FormControl
          onChange={(e) => setPasswordAgain(e.target.value)}
          type="password"
          id="outlined-basic"
          label="Password-confirmation"
          variant="outlined"
          fullWidth
          sx={{ margin: "5px" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Подтвердите новый пароль
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password-confirm"
          />
        </FormControl>

        <Button
          className="register_button"
          size="large"
          sx={{
            color: "white",
            backgroundColor: "grey",
            width: "25vw",
            borderRadius: "23px",
            fontSize: "14px",
          }}
          onClick={() => {
            handleSave();
            navigate("/user");
          }}
        >
          Дальше
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

export default PasswordChange;
