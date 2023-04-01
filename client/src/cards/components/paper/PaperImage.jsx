import React from "react";
import cardType from "../../models/types/cardType";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import { Paper } from "@mui/material";

const PaperImage = ({ card }) => {
  return (
    <>
      <Divider sx={{ margin: 2 }} />
      <Paper elevation={2}>
        <CardMedia
          component="img"
          image={card.image.url}
          alt={card.image.alt}
          sx={{
            maxHeight: "350px",
            padding: 1,
          }}
        />
      </Paper>
    </>
  );
};

PaperImage.propTypes = {
  card: cardType.isRequired,
};

export default PaperImage;
