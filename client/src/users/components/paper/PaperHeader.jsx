import React from "react";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "../../../providers/ThemeProvider";

const PaperHeader = () => {
  const { isDark } = useTheme();

  return (
    <>
      <Paper elevation={2} sx={{ backgroundColor: isDark ? null : "#00234c" }}>
        <Typography
          variant="h3"
          align="center"
          color="#fff"
          padding={2}
          sx={{ fontWeight: 900 }}
        >
          User info
        </Typography>
      </Paper>
    </>
  );
};

export default PaperHeader;
