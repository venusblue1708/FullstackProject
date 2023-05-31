import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import google from "./img/google_short_icon.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/joy";
import "../Register/Register.css";
import { auth, provider } from "../../../fire";

const Register = () => {
  const { handleRegister, loading, error, setError } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleSave = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirmation", passwordConfirm);
      handleRegister(formData);
    }
  };
  useEffect(() => {
    setError(false);
    setValue(localStorage.getItem("email"));
  }, []);
  if (loading) {
    return <Loader />;
  }

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          width: "30vw",
          margin: "5vh auto",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "29px",
        }}
        className="regiter_box"
      >
        <h1 className="typogra">Создайте свой профиль</h1>
        {error ? <h2>{error}</h2> : null}
        <FormLabel action="submit">
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            fullWidth
            sx={{ margin: "5px" }}
          />

          <TextField
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Фамилия"
            variant="outlined"
            fullWidth
            sx={{ margin: "5px" }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Электронная почта"
            variant="outlined"
            fullWidth
            sx={{ margin: "5px" }}
          />
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="outlined-basic"
            label="Пароль"
            variant="outlined"
            fullWidth
            sx={{ margin: "5px" }}
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
          <FormControl
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            id="outlined-basic"
            label="Password-confirmation"
            variant="outlined"
            fullWidth
            sx={{ margin: "5px" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Подтвердите пароль
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
        </FormLabel>
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
            navigate("/active");
          }}
        >
          Дальше
        </Button>

        <Box>
          <Button
            onClick={handleClick}
            sx={{
              border: "2px solid grey",
              width: "25vw",

              borderRadius: "23px",
              fontSize: "13px",
              color: "grey",
            }}
            className="login_button"
          >
            <img
              src={google}
              alt=""
              width={26}
              style={{ marginRight: "8px" }}
            />
            Вход через Google
          </Button>
        </Box>
        <Button
          onClick={() => navigate("/login")}
          sx={{
            border: "2px solid grey",
            width: "25vw",

            borderRadius: "23px",
            fontSize: "13px",
            color: "grey",
          }}
          className="login_button"
        >
          У вас уже есть профиль ? Войдите
        </Button>
      </Box>
      <Box
        sx={{
          width: "38vw",

          margin: "5.5vh auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className="register_image"
      >
        <h1 style={{ fontSize: "34px", fontFamily: "inherit" }}>
          Добро пожаловать в Skillbox!
        </h1>
        <p style={{ fontSize: "18px", fontFamily: "initial" }}>
          Сотни прикладных курсов для профессионального роста, поддержка
          наставников и новые знакомства. Просто начните!
        </p>
        <img
          src="https://go.skillbox.ru/assets/img/3d/auth-login.png"
          alt=""
          width={620}
          height={420}
        />
      </Box>
    </Box>
  );
};

export default Register;
