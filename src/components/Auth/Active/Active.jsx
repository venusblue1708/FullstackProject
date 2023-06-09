import React, { useState } from "react";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/joy";
import "./Active.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
const Active = () => {
  const { handleActive } = useAuth();
  const [code, setCode] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleSave = () => {
    if (!code) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("code", code);

      handleActive(formData);
    }
  };
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      className="active_content"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box
        className="active_blog"
        sx={{
          height: "24vw",
          width: "30vw",
          margin: "11vh auto",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "29px",
        }}
      >
        <Box className="typa_active">
          <h2 style={{ marginLeft: "160px" }}>Активизация</h2>
          <p style={{ marginLeft: "20px", color: "grey" }}>
            Чтобы продолжить регистрацию, проверьте свою почту @, мы отправили
            вам код
          </p>
        </Box>
        <FormControl
          className="active_input"
          onChange={(e) => setCode(e.target.value)}
          type="code"
          id="outlined-basic"
          label="Код"
          variant="outlined"
          fullWidth
          sx={{ margin: "5px" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">Код</InputLabel>
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
        <Button
          onClick={() => {
            handleSave();
            navigate("/user");
          }}
          size="large"
          sx={{
            color: "white",
            backgroundColor: "#264653",
            width: "12vw",
            borderRadius: "23px",
            fontSize: "14px",
          }}
          className="active_button"
        >
          Дальше
        </Button>
      </Box>
      <Box
        sx={{
          width: "35vw",
          margin: "5vh auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
        }}
        className="active_image"
      >
        <h1>Добро пожаловать в Skillbox!</h1>
        <p style={{ fontSize: "16px" }}>
          Сотни прикладных курсов для профессионального роста, поддержка
          наставников и новые знакомства. Просто начните!
        </p>
        <img
          src="https://go.skillbox.ru/assets/img/3d/auth-login.png"
          alt=""
          width={500}
        />
      </Box>
    </Box>
  );
};

export default Active;
