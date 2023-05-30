import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Switch from "@mui/material/Switch";
import { Divider } from "@mui/material";
import "./UserPage.css";
import { useNavigate } from "react-router-dom";
import "./Theme.jsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./Theme";
import { useAuth } from "../../contexts/AuthContextProvider";

export default function NavbarUserPage() {
  const [count, setCount] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, handleLogout, checkAuth } = useAuth();

  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const [theme, setTheme] = React.useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
            marginTop: "16px",
            marginLeft: "85px",
            width: "88%",
          }}
          className="appbar_user_page"
        >
          <Toolbar
            sx={{
              backgroundColor: "white",
              color: "black",
            }}
            className="toolbar"
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "30px", fontFamily: "monospace" }}
              className="typo_skill"
            >
              Skillbox
            </Typography>
            <Button
              color="inherit"
              sx={{
                borderRadius: "25px",
                backgroundColor: "#ebebeb",
                marginRight: "20px",
                width: "8%",
                fontSize: "13px",
                height: "38px",
              }}
              onClick={() => navigate("/")}
              className="button_typa"
            >
              Главная
            </Button>
            <Button
              color="inherit"
              sx={{
                borderRadius: "25px",
                width: "11%",
                fontSize: "13px",
                height: "38px",
              }}
              onClick={() => navigate("/saleForFriends")}
              className="button_typa"
            >
              Приведи друга
            </Button>

            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  borderRadius: "50px",
                }}
              >
                <img
                  src="https://go.skillbox.ru/media/files/share/1.png"
                  alt=""
                  width={40}
                  className="iconLog"
                />
              </IconButton>
              <Menu
                className="menu_bar"
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <img
                    src="https://go.skillbox.ru/media/files/share/1.png"
                    alt=""
                    width={40}
                    className="iconLog"
                  />
                  {user ? user : "No auth user"}
                </MenuItem>
                <Divider />
                <MenuItem className="menu" onClick={handleClose}>
                  Мой профиль
                </MenuItem>
                <Divider />
                <MenuItem className="menu">
                  Темная тема
                  <Switch
                    {...label}
                    defaultChecked
                    color="default"
                    onClick={switchTheme}
                  />
                </MenuItem>
                <MenuItem
                  className="menu"
                  onClick={() => {
                    handleClose();
                    navigate("/contactus");
                  }}
                >
                  Контакты
                </MenuItem>
                <MenuItem onClick={handleLogout} className="menu">
                  Выход
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
