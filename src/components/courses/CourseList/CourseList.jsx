import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { useCourses } from "../../contexts/CoursesContextProvider";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import PaginationList from "../PaginationList";
import { Box } from "@mui/joy";

const CourseList = () => {
  const { getCourses, courses, pages } = useCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getCourses();
  }, [searchParams]);

  function getPagesCount() {
    let pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }
  console.log(courses);
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginLeft: "20%",
          marginTop: "20px",
        }}
        variant="h3"
        component="div"
        className="prov"
      >
        Курсы
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {courses.map((item) => (
          <CourseCard key={item.id} item={item} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "70px" }}>
        <PaginationList
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          getPagesCount={getPagesCount}
        />
      </Box>
    </Box>
  );
};

export default CourseList;
