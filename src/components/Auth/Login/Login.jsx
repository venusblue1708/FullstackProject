import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, Typography } from "@mui/joy";
import "../Login/Login.css";
const Login = () => {
  const { handleLogin, error, setError, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      handleLogin(formData, email);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
  }, []);
  if (loading) {
    return <Loader />;
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      className="login_content"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
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
        className="login_form"
      >
        <h1 className="login_typo">Войдите в свой профиль</h1>
        {error ? <h2>{error}</h2> : null}
        <FormLabel action="submit">
          <TextField
            className="login_input"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Элетронная почта"
            variant="outlined"
            fullWidth
            sx={{ margin: "8px" }}
          />

          <FormControl
            className="login_input"
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            fullWidth
            sx={{ margin: "8px" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
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
              label="Password"
            />
          </FormControl>
        </FormLabel>
        <a
          href="/password"
          style={{ color: "#4a4e69", fontSize: "15px", marginTop: "10px" }}
        >
          не помню пароль{" "}
        </a>
        <Button
          className="login_button"
          sx={{
            color: "white",
            backgroundColor: "grey",
            width: "25vw",
            borderRadius: "23px",
            fontSize: "14px",
            marginTop: "15px",
          }}
          onClick={(e) => {
            handleSave(e);
            navigate("/user");
          }}
        >
          Войти
        </Button>
        <Button
          onClick={() => navigate("/register")}
          sx={{
            border: "2px solid grey",
            width: "25vw",
            borderRadius: "23px",
            fontSize: "13px",
            color: "#403d39",
          }}
          className="register"
        >
          Ещё нет профиля? Зарегистрируйтесь
        </Button>
      </Box>
      <Box
        sx={{
          width: "40vw",
          margin: "5vh auto",
          display: "flex",
          flexDirection: "column",
        }}
        className="login_image"
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
          className="image"
        />
      </Box>
    </Box>
  );
};

export default Login;
