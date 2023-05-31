import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../BlogStartCarousel/BlogStartCarousel.css";
// import { useCourses } from "../contexts/CoursesContextProvider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../contexts/CoursesContextProvider";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;600&display=swap');
</style>;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "Станьте востребован­ным специалистом",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Занимайтесь тем, что нравится",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Меняйте профессию, меняйте жизнь",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Получите новые навыки для карьеры",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Получите актуальную специальность",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const imagesCarousel = [
  {
    label:
      " Алина - организовала любительский баскетбольный клуб и спонсирует детскую команду",
    imgPath:
      "https://248006.selcdn.ru/MainSite/start-screen/alina/alina_320.jpg",
  },
  {
    label: "Игорь  - Бросил офисную работу и стал снимать фестивальное кино.",
    imgPath:
      "https://248006.selcdn.ru/MainSite/start-screen/igor/igor_1280.webp",
  },
  {
    label: "Дмитрий - Решил сменить профессию и пошёл учиться на дизайнера.",
    imgPath:
      "https://248006.selcdn.ru/MainSite/start-screen/dmitriy/dmitriy_320.jpg",
  },
  {
    label: "Василий - Выучился на таргетолога и устроился в digital‑агентство.",
    imgPath:
      "https://248006.selcdn.ru/MainSite/start-screen/vasiliy/vasiliy_320.jpg",
  },
  {
    label:
      "Роман - За полгода стал разработчиком и пришёл к стабильному доходу . ",
    imgPath:
      "https://248006.selcdn.ru/MainSite/start-screen/roman/roman_320.jpg",
  },
];

function BlogStartCarousel() {
  const { categories, getCategories } = useCourses();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxStep = imagesCarousel.length;
  const navigate = useNavigate();
  React.useEffect(() => {
    getCategories();
  }, []);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginLeft: "80px",
          position: "relative",
        }}
        className="all_carousel"
      >
        <Box
          className="box_carousel"
          sx={{
            flexGrow: 1,
            marginRight: "20px",
            backgroundColor: "blue",
            color: "white",
            width: "180%",
            height: "455px",
            marginTop: "50px",
          }}
        >
          <Typography
            className="typography_title"
            sx={{
              fontSize: "59px",
              lineHeight: "65px",
              marginTop: "40px",
              marginLeft: "60px",
              marginRight: "40px",
            }}
          >
            {images[activeStep].label}
          </Typography>
          <MobileStepper className="button_filter" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "38%",
              top: "340px",
              left: "50px",

              position: "absolute",
            }}
            className="box_button"
          >
            {categories.map((item) => (
              <Button
                className="button_filter"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "20px",

                  color: "black",
                  margin: "2px",
                }}
                key={item.id}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}></Box>
        <Box
          className="second_carousel"
          sx={{ flexGrow: 1, marginTop: "50px" }}
        >
          <Paper></Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imagesCarousel.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 450,
                      display: "block",
                      overflow: "hidden",
                      width: "75%",
                      loading: "lazy",
                      borderRadius: "25px",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                    //
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Typography
            sx={{
              fontSize: "15px",
              marginTop: "10px",
              marginLeft: "10px",
              fontFamily: "revert-layer",
              fontWeight: "50px",
            }}
            className="second_typography"
          >
            {imagesCarousel[activeStep].label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogStartCarousel;
