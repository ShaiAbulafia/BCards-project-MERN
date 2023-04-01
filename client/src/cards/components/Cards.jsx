import { Grid, Typography } from "@mui/material";
import { arrayOf, func } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import Card from "./card/Card";

const Cards = ({ cards, onDelete, onLike }) => {
  if (!cards.length)
    return (
      <Typography m={2}>
        Oops.. it seems there are no bussiness cards to display
      </Typography>
    );
  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item key={card._id} pb={2} xs={12} sm={6} md={4} lg={3}>
            <Card card={card} onDelete={onDelete} onLike={onLike} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
};
export default Cards;
