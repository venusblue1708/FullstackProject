import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import CreditCard from "../Ordering/CreditCard";
import "./Ordering.css";
import { useCourses } from "../contexts/CoursesContextProvider";
import { useParams } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f0ead2",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const Ordering = () => {
  const { getOneCourse, oneCourse } = useCourses();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  useEffect(() => {
    getOneCourse(id);
  }, []);
  useEffect(() => {
    if (oneCourse) {
      setDescription(oneCourse.description);
      setPrice(oneCourse.price);
      setTitle(oneCourse.title);
      setCover(oneCourse.cover);
      console.log(oneCourse);
    }
  }, [oneCourse]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCover] = useState("");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15%",
          marginTop: "100px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography className="ordering_title">Покупка курса</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "70px",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Box
            className="inp_control"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваше имя *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваша фамилия *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваш телефон *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Typography className="inp_span">Ваш e-mail *</Typography>
              <TextField className="ordering_inp" color="grey" />
            </Box>
          </Box>
          <Box>
            <FormControl sx={{ margin: "50px" }}>
              <FormLabel id="demo-radio-buttons-group-label">Оплата</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Прямой банковский перевод"
                  control={<Radio />}
                  label="Прямой банковский перевод"
                />
                <FormControlLabel
                  value="liqPay"
                  control={<Radio />}
                  label="LiqPay"
                />
              </RadioGroup>
            </FormControl>
            <CreditCard />
            <Box>
              <Button
                onClick={() => {
                  handleOpen();
                }}
                sx={{
                  backgroundColor: "rgb(72, 72, 196)",
                  marginTop: "50px",
                  color: "#ffffff",
                  width: "200px",
                  height: "55px",
                  marginLeft: "150px",
                }}
              >
                Подвердить заказ
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box sx={{ marginLeft: "70px" }}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Вы купили этот курс :
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, marginLeft: "16px" }}
                    >
                      теперь вы студент Skillbox
                    </Typography>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardActions className="ordering_card">
            <CardMedia>
              <img
                className="ordering_img"
                width={350}
                height={350}
                src={cover}
                alt=""
              />
            </CardMedia>
            <Box>
              <CardContent className="ordering_text">{title}</CardContent>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardContent className="count">{description}</CardContent>
                <CardContent className="ordering_price">
                  Цена курса: {price}
                </CardContent>
              </Box>
            </Box>
          </CardActions>
        </Box>
      </Box>
    </Box>
  );
};

export default Ordering;
