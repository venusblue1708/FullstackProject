import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./UserPage.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid grey",
  boxShadow: 24,
  p: 4,
};

const HomeUserPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <Box className="user_page_img_block">
          <h1
            className="h1_text"
            style={{ fontSize: "35px", fontFamily: "inherit" }}
          >
            Не знаете, с чего начать ?
          </h1>
          <p
            className="paragraph"
            style={{ fontFamily: "sans-serif", fontSize: "19px" }}
          >
            Пройдите тест на профориентацию, и мы подберём
            <br /> вам подходящие курсы и профессии!
          </p>
          <Button
            className="home_user_page_button"
            sx={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
              width: "40%",
              height: "50px",
              fontSize: "14px",
            }}
            onClick={handleOpen}
          >
            ПРОЙТИ ТЕСТ
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                sx={{ color: "black" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Подходящая профессия для вас :
              </Typography>

              <img
                src="https://i.pinimg.com/564x/31/65/48/31654880d74c6d094272df51db918823.jpg"
                alt=""
                width={250}
                style={{ marginLeft: "125px", marginTop: "40px" }}
              />
            </Box>
          </Modal>
        </Box>
        <Box className="image_home_page" sx={{ marginTop: "30px" }}>
          <img
            src="https://go.skillbox.ru/assets/img/3d/welcome.png"
            alt="error"
            width={500}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeUserPage;
