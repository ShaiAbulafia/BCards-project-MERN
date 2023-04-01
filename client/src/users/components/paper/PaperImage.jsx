import React from "react";
import userType from "../../models/types/userType";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import { Paper } from "@mui/material";

const PaperImage = ({ user }) => {
  return (
    <>
      <Paper elevation={2} sx={{ marginTop: 3 }}>
        <CardMedia
          component="img"
          image={user.image.url}
          alt={user.image.alt}
          sx={{
            padding: 1,
            objectFit: "contain",
            maxHeight: 400,
          }}
        />
      </Paper>
    </>
  );
};

PaperImage.propTypes = {
  user: userType.isRequired,
};

export default PaperImage;
