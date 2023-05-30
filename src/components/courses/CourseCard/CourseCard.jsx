import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CourseCard.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@600&display=swap');
</style>;

export default function CourseCard({ item }) {
  const navigate = useNavigate();
  const { addProductToCard } = useCart();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "80%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            marginTop: "20px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            border: "2px solid",
            width: "100%",
            border: "none",
            backgroundColor: "#60b3ff",
          }}
        >
          <Box key={item.id} sx={{ display: "flex" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Курсы
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ width: "40%" }} variant="h5" component="div">
                  {item.title}
                </Typography>
                <img
                  style={{ margin: "10px" }}
                  width={70}
                  src={item.cover}
                  alt="error"
                />
              </Box>
              <Typography sx={{ mb: 1.5, marginTop: "15%", fontSize: "10px" }}>
                <li>Помощь в трудоустройстве</li>
              </Typography>
              <Box className="box" sx={{ borderRadius: "10px" }}>
                <Typography sx={{ fontSize: "35px", marginLeft: "10px" }}>
                  {item.price} ₽/мес.
                </Typography>
                <Typography sx={{ marginLeft: "10px" }} color="text.secondary">
                  {item.duration_months} месяца обучения
                </Typography>
              </Box>
              <CardActions sx={{ marginTop: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                  }}
                  className="button"
                >
                  Оставить отзыв
                </Button>
                <Button
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                  }}
                  className="button"
                  onClick={() => {
                    addProductToCard(item);
                    navigate("/cart");
                  }}
                >
                  Записаться
                </Button>

                <Box>
                  <Button
                    sx={{
                      backgroundColor: "blue",
                      color: "white",
                    }}
                    className="button"
                  >
                    Delete
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "blue",
                      color: "white",
                    }}
                    className="button"
                  >
                    Edit
                  </Button>
                </Box>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}