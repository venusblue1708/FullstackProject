import React, { useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { useCourses } from "../contexts/CoursesContextProvider";

const SideBar = () => {
  const {
    search,
    setSearch,
    searchParams,
    setSearchParams,
    getCourses,
    fetchByParams,
    getLanguage,
    languages,
    categories,
    getCategories,
  } = useCourses();
  console.log(languages, categories);
  useEffect(() => {
    setSearchParams({ search: search });
    getCourses();
  }, [search]);

  useEffect(() => {
    getCourses();
  }, [searchParams]);

  useEffect(() => {
    getCategories();
    getLanguage();
  }, []);
  return (
    <Grid>
      <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Paper>

      <Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {<h4>Тип обучения</h4>}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            {categories?.map((item) => (
              <FormControlLabel
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {<h4>Язык обучения</h4>}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("language", e.target.value)}
          >
            {languages?.map((item) => (
              <FormControlLabel
                value={item.id}
                control={<Radio />}
                label={item.language}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SideBar;
