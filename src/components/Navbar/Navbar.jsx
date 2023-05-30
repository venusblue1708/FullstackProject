import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel, Select } from "@mui/material";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const settings = [
  { name: "Мой профиль", link: "/user", id: 1 },
  { name: "Войти", link: "/register", id: 2 },
];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [company, setCompany] = React.useState("");

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Box sx={{ marginTop: "0px" }}>
      <div className="header_sale">
        <img
          className="saleSmallImg"
          width={110}
          height={110}
          src="https://248006.selcdn.ru/MainSite/63210c73-957f-44d2-90d0-1a7e6838d423/c/ggzsxibz-desktop-webp.webp"
          alt="img"
        />
        <h2 onClick={() => navigate("/sale")}>ВЕСЕННИЕ СКИДКИ ДО 50%</h2>
        <button onClick={() => navigate("/courses")} className="header_btn">
          Выбрать курс
        </button>
      </div>
      <AppBar
        position="static"
        sx={{
          height: "80px",
          justifyContent: "space-between",
          backgroundColor: "white",
          // marginTop: "5%",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Toolbar
            className="dropdown"
            disableGutters
            sx={{
              width: "100%",
            }}
          >
            {/* adaptive navbar  */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="dark"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <FormControl
                    className="nav_btn"
                    sx={{
                      width: "160px",
                      height: "55px",
                      border: "1px solid black",
                      marginRight: "3%",
                      marginTop: "5px",
                      borderRadius: "3px",
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Добавить
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={company}
                      label="Company"
                      onChange={handleChange}
                    >
                      <MenuItem onClick={() => navigate("/admin")} value={1}>
                        курс
                      </MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>
                <MenuItem>
                  <FormControl
                    className="nav_btn"
                    sx={{
                      width: "160px",
                      height: "55px",
                      border: "1px solid black",
                      marginRight: "3%",
                      marginTop: "5px",
                      borderRadius: "3px",
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      O Skillbox
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={company}
                      label="Company"
                      onChange={handleChange}
                    >
                      <MenuItem onClick={() => navigate("/aboutus")} value={1}>
                        О нас
                      </MenuItem>

                      <MenuItem onClick={() => navigate("/reviews")} value={2}>
                        Отзывы
                      </MenuItem>

                      <MenuItem
                        onClick={() => navigate("/saleForFriends")}
                        value={3}
                      >
                        Скидки для друзей
                      </MenuItem>

                      <MenuItem
                        onClick={() => navigate("/community")}
                        value={4}
                      >
                        Сообщество Skillbox
                      </MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>
                <MenuItem>
                  <FormControl
                    className="nav_btn"
                    sx={{
                      width: "160px",
                      height: "55px",
                      border: "1px solid black",
                      marginRight: "3%",
                      marginTop: "5px",
                      borderRadius: "3px",
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Плейлисты
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={company}
                      label="Company"
                      onChange={handleChange}
                    >
                      <MenuItem onClick={() => navigate("/playlist")} value={1}>
                        Плейлисты
                      </MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>
              </Menu>
            </Box>

            {/* adaptive navbar  */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                width: "200px",
                color: "black",
                fontSize: "30px",
              }}
            >
              Skillbox
            </Typography>
            <Box id="dropdown" sx={{ width: "100%" }}>
              <FormControl
                className="nav_btn"
                sx={{
                  width: "160px",
                  height: "55px",
                  border: "1px solid black",
                  marginRight: "3%",
                  marginTop: "5px",
                  borderRadius: "3px",
                }}
              >
                <InputLabel id="demo-simple-select-label">Добавить</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
                  label="Company"
                  onChange={handleChange}
                >
                  <MenuItem onClick={() => navigate("/admin")} value={1}>
                    курс
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl
                className="nav_btn"
                sx={{
                  width: "160px",
                  height: "55px",
                  border: "1px solid black",
                  marginRight: "3%",
                  marginTop: "5px",
                  borderRadius: "3px",
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  O Skillbox
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
                  label="Company"
                  onChange={handleChange}
                >
                  <MenuItem onClick={() => navigate("/aboutus")} value={1}>
                    О нас
                  </MenuItem>

                  <MenuItem onClick={() => navigate("/review")} value={2}>
                    Отзывы
                  </MenuItem>

                  <MenuItem
                    onClick={() => navigate("/saleForFriends")}
                    value={3}
                  >
                    Скидки для друзей
                  </MenuItem>

                  <MenuItem onClick={() => navigate("/community")} value={4}>
                    Сообщество Skillbox
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                className="nav_btn"
                sx={{
                  width: "160px",
                  height: "55px",
                  border: "1px solid black",
                  marginRight: "3%",
                  marginTop: "5px",
                  borderRadius: "3px",
                }}
              >
                <InputLabel id="demo-simple-select-label">Плейлисты</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
                  label="Company"
                  onChange={handleChange}
                >
                  <MenuItem onClick={() => navigate("/playlist")} value={1}>
                    Плейлисты
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl
                className="nav_btn"
                sx={{
                  width: "130px",
                  height: "53px",
                  border: "1px solid black",
                  marginRight: "3%",
                  marginTop: "5px",
                  borderRadius: "3px",
                }}
              ></FormControl>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://eddu.pro/wp-content/uploads/2021/08/skillbox-logo-600x600.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <Link
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={setting.link}
                    >
                      <Typography
                        textAlign="center"
                        sx={{ color: "black", fontSize: "15px" }}
                      >
                        {setting.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;
