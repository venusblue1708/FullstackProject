import React from "react";
import SideBar from "../../courses/SideBar";
import { Grid } from "@mui/material";
import { Box } from "@mui/joy";

const CoursesPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Grid sx={{ display: "flex" }}>
        <Grid item md={3}>
          <SideBar />
        </Grid>
        <Grid sx={{ display: "flex" }} item md={8}></Grid>
      </Grid>
    </Box>
  );
};

export default CoursesPage;
