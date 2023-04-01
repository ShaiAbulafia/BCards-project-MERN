import React from "react";
import { string, bool, func } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Typography from "@mui/material/Typography";
import cardType from "../models/types/cardType";
import Paper from "./paper/Paper";

const PaperFeedback = ({ isLoading, error, card, onChangeBizNum }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!card)
    return (
      <Typography variant="body1">
        Oops.. cant find the business card in database that you were looking
        for!
      </Typography>
    );
  if (card) return <Paper card={card} onChangeBizNum={onChangeBizNum} />;
  return null;
};

PaperFeedback.propTypes = {
  card: cardType,
  isLoading: bool.isRequired,
  error: string,
  onChangeBizNum: func.isRequired,
};

export default PaperFeedback;
