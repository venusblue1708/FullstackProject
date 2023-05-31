import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useCourses } from "../../contexts/CoursesContextProvider";
import { Typography } from "@mui/joy";

const EditCourse = () => {
  const {
    getCategories,
    categories,
    getOneCourse,
    oneCourse,
    updateCourse,
    getLanguage,
    languages,
    getMentors,
    mentor,
  } = useCourses();

  const { id } = useParams();
  useEffect(() => {
    getOneCourse(id);
    getCategories();
    getLanguage();
    getMentors();
  }, []);
  useEffect(() => {
    if (oneCourse) {
      setDescription(oneCourse.description);
      setPrice(oneCourse.price);
      setCategory(oneCourse.category.id);
      setTitle(oneCourse.title);
      setDurationMonths(oneCourse.duration_months);
      setCover(oneCourse.cover);
      setMentors(oneCourse.mentors.id);
      setLanguage(oneCourse.language.id);
      console.log(oneCourse);
    }
  }, [oneCourse]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [durationMonths, setDurationMonths] = useState("");
  const [category, setCategory] = useState("");
  const [cover, setCover] = useState("");
  const [mentors, setMentors] = useState("");
  const [language, setLanguage] = useState("");
  function handleSave() {
    if (
      !title ||
      !description ||
      !price ||
      !durationMonths ||
      !category ||
      !cover ||
      !mentors ||
      !language
    ) {
      return alert("Для редактирования, заполните все поля!");
    }
    let editCourses = new FormData();
    editCourses.append("title", title);
    editCourses.append("description", description);
    editCourses.append("price", price);
    editCourses.append("category", category);
    editCourses.append("mentors", mentors);
    editCourses.append("language", language);
    editCourses.append("duration_months", durationMonths);

    if (cover) {
      editCourses.append("cover", cover);
    }
    // let newCourses = {
    //   title: title,
    //   description: description,
    //   price: price,
    //   category: category,
    //   mentors: mentors,
    //   language: language,
    //   duration_months: durationMonths,
    //   cover: cover,
    // };
    updateCourse(id, editCourses);
  }

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "5vh auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "rgb(232, 232, 41)",
        gap: "30px",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      <h1 className="admin_title" align="center">
        Редактирование курса
      </h1>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Выбрать категорию</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              {categories.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {" "}
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Выбрать язык</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              label="Languages"
            >
              {languages.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {" "}
                  {item.language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Выбрать ментора</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={mentors}
              onChange={(e) => setMentors(e.target.value)}
              label="Mentors"
            >
              {mentor.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {" "}
                  {item.first_name} {item.last_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginLeft: "45px",
        }}
      >
        <TextField
          className="admin_inp"
          id="outlined-basic"
          label="Название"
          variant="outlined"
          value={title}
          name="title"
          size="small"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className="admin_inp"
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          name="description"
          size="small"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          className="admin_inp"
          id="outlined-basic"
          label="Цена курса"
          variant="outlined"
          value={price}
          type="number"
          name="price"
          size="small"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Typography>Image before</Typography>
        <img src={oneCourse?.cover} width={100} alt="" />
        <TextField
          className="admin_inp"
          id="outlined-basic"
          variant="outlined"
          type="file"
          accept="image/*"
          onChange={(e) => setCover(e.target.files[0])}
          name="cover"
          size="small"
        />
        <TextField
          className="admin_inp"
          id="outlined-basic"
          label="Месяц обучения"
          variant="outlined"
          value={durationMonths}
          type="number"
          name="duration_months"
          size="small"
          onChange={(e) => setDurationMonths(e.target.value)}
        />
      </Box>
      <Button
        className="admin_btn"
        onClick={handleSave}
        size="large"
        variant="outlined"
        sx={{
          border: "1px solid black",
          color: "white",
          backgroundColor: "rgb(72, 72, 196)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        изменить
      </Button>
    </Box>
  );
};

export default EditCourse;
