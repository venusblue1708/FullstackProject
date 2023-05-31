import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";

import "../Footer/Footer.css";
import { useReviews } from "../contexts/ReviewsContextProvider";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const AddReview = () => {
  const navigate = useNavigate();
  const { createReviews } = useReviews();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ratingScore, setRatingScore] = useState("");
  const [body, setBody] = useState("");
  const { courseId, setCourseId } = useReviews();

  function handleSave() {
    if (!firstName || !lastName || !ratingScore || !body) {
      alert("заполните все поля!");
      return;
    }
    let newReviews = new FormData();
    newReviews.append("first_name", firstName);
    newReviews.append("last_name", lastName);
    newReviews.append("rating_score", ratingScore);
    newReviews.append("body", body);
    newReviews.append("course_id", courseId);
    createReviews(newReviews);
    console.log(newReviews);
  }
  console.log(firstName, lastName, ratingScore, body);
  return (
    <Box className="second-footer-box">
      <Box className="help-box">
        <div className="help-box-parg">
          <h2>Оставим отзыв!</h2>
          <p>
            Если у вас вопросы о формате или вы не знаете, <br /> что выбрать,
            оставьте свой номер - мы позвоним, <br /> чтобы ответить на все ваши
            вопросы.
          </p>
        </div>
        <Box className="help-box-inp" sx={{}}>
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Имя"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
          />

          <TextField
            className="text-field"
            id="outlined-basic"
            label="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
            sx={{ marginLeft: "2%" }}
          />

          <TextField
            className="text-field"
            id="outlined-basic"
            label="Ваш отзыв"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            variant="outlined"
          />
          <Rating
            name="simple-controlled"
            value={ratingScore}
            onChange={(event, newValue) => {
              setRatingScore(newValue);
            }}
          />
          <div className="btn-box">
            <p>
              нажимая на кнопку, я соглашаюсь на <br />
              <a href="">обработку персоналных данных</a>
            </p>
            <Button
              onClick={() => {
                handleSave();
                navigate("/review");
              }}
              className="btn-footer"
              variant="contained"
            >
              Отправить
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default AddReview;
