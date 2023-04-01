import { Container } from "@mui/system";
import React from "react";
import cardType from "../../models/types/cardType";
import { Paper as MuiPaper } from "@mui/material";
import PaperHeader from "./PaperHeader";
import PaperBody from "./PaperBody";
import PaperImage from "./PaperImage";
import { useTheme } from "../../../providers/ThemeProvider";
import { useUser } from "../../../users/providers/UserProvider";
import AdminPaper from "./AdminPaper";
import { func } from "prop-types";

const Paper = ({ card, onChangeBizNum }) => {
  const { isDark } = useTheme();
  const { user } = useUser();

  return (
    <>
      {user && user.isAdmin && (
        <AdminPaper cardId={card._id} onChangeBizNum={onChangeBizNum} />
      )}
      <Container sx={{ paddingBottom: 5 }}>
        <MuiPaper
          elevation={3}
          sx={{ padding: 3, backgroundColor: isDark ? "#333333" : "#1976d2" }}
        >
          <PaperHeader card={card} />
          <PaperBody card={card} />
          <PaperImage card={card} />
        </MuiPaper>
      </Container>
    </>
  );
};

Paper.propTypes = {
  card: cardType.isRequired,
  onChangeBizNum: func.isRequired,
};

export default Paper;
