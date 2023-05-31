import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useReviews } from "../contexts/ReviewsContextProvider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ReviewsCard() {
  const { reviews, getReviews } = useReviews();
  React.useEffect(() => {
    getReviews();
  }, []);
  console.log(reviews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
          borderRadius: "50px",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {reviews.map((item) => (
          <React.Fragment>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Box>
              <Box sx={{}}>
                <Typography color="text.secondary" variant="body2">
                  Отзыв о курсе
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  {item.user.first_name} {item.user.last_name}
                </Typography>
                <Rating name="read-only" value={item.rating_score} readOnly />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <Typography>{item.body}</Typography>
                </Typography>
              </Box>
            </CardContent>
            <CardActions></CardActions>
          </React.Fragment>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ borderRadius: "50px" }}
        nextButton={
          <Button
            size="small"
            color="secondary"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            color="secondary"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ReviewsCard;
