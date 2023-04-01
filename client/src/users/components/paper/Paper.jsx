import { Container } from "@mui/system";
import React from "react";
import userType from "../../models/types/userType";
import { Grid, Paper as MuiPaper } from "@mui/material";
import PaperHeader from "./PaperHeader";
import PaperBody from "./PaperBody";
import PaperImage from "./PaperImage";
import { useTheme } from "../../../providers/ThemeProvider";

const Paper = ({ user }) => {
  const { isDark } = useTheme();

  return (
    <Container sx={{ paddingBottom: 5 }}>
      <MuiPaper
        elevation={3}
        sx={{ padding: 3, backgroundColor: isDark ? "#333333" : "#1976d2" }}
      >
        <PaperHeader />
        <Grid container spacing={2}>
          <Grid item md={8} sm={12}>
            <PaperBody userObj={user} />
          </Grid>
          <Grid item md={4} sm={12}>
            <PaperImage user={user} />
          </Grid>
        </Grid>
      </MuiPaper>
    </Container>
  );
};

Paper.propTypes = {
  user: userType.isRequired,
};

export default Paper;
