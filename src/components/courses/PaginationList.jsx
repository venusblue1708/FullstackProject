import * as React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button } from "@mui/joy";

export default function PaginationList({
  getPagesCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <Box>
      <Button
        onClick={() =>
          setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
        }
      >
        <ArrowBackIosIcon />
      </Button>
      {getPagesCount().map((item) =>
        item === currentPage ? (
          <Button onClick={() => setCurrentPage(item)} key={item} active>
            {item}
          </Button>
        ) : (
          <Button
            color="secondary"
            onClick={() => setCurrentPage(item)}
            key={item}
          >
            {item}
          </Button>
        )
      )}

      <Button
        onClick={() =>
          setCurrentPage(
            currentPage === getPagesCount().sort((a, b) => b - a)[0]
              ? currentPage
              : currentPage + 1
          )
        }
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
}
