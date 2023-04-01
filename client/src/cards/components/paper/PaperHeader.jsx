import React from "react";
import cardType from "../../models/types/cardType";
import { Typography, Paper } from "@mui/material";
import {
  makeEveryFirstLetterCapital,
  makeFirstLetterCapital,
} from "../../../utils/algoMethods";
import Divider from "@mui/material/Divider";
import { useTheme } from "../../../providers/ThemeProvider";

const PaperHeader = ({ card }) => {
  const { isDark } = useTheme();

  return (
    <>
      <Paper elevation={2} sx={{ backgroundColor: isDark ? null : "#00234c" }}>
        <Typography
          variant="h6"
          align="center"
          color="#fff"
          paddingTop={2}
          sx={{ fontWeight: 900 }}
        >
          Business number: {card.bizNumber}
        </Typography>
        <Divider sx={{ marginY: 1 }} />
        <Typography
          variant="h3"
          align="center"
          color="#fff"
          sx={{ fontWeight: 900 }}
        >
          {makeEveryFirstLetterCapital(card.title)}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#fff"
          paddingY={2}
          sx={{ fontWeight: 900 }}
        >
          {makeFirstLetterCapital(card.subtitle)}
        </Typography>
      </Paper>
    </>
  );
};

PaperHeader.propTypes = {
  card: cardType.isRequired,
};

export default PaperHeader;
