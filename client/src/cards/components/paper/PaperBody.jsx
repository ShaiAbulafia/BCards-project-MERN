import React from "react";
import cardType from "../../models/types/cardType";
import { Grid, Paper, Typography } from "@mui/material";
import { makeFirstLetterCapital } from "../../../utils/algoMethods";
import Divider from "@mui/material/Divider";

const PaperBody = ({ card }) => {
  return (
    <>
      <Paper elevation={2} sx={{ marginTop: 3, paddingY: 3 }}>
        <Grid container spacing={3} paddingX={6}>
          <Grid item xs={12}>
            <Typography fontWeight={700} variant="h5" color="text.secondary">
              Contact
            </Typography>
          </Grid>
          <Grid container spacing={3} paddingLeft={5} paddingY={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Phone:{" "}
                </Typography>
                {card.phone}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Email:{" "}
                </Typography>
                {card.email}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Web:{" "}
                </Typography>
                <a href={card.web} target="_blank" rel="noreferrer">
                  {card.web}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        <Grid container spacing={3} paddingX={6}>
          <Grid item xs={12}>
            <Typography fontWeight={700} variant="h5" color="text.secondary">
              Address
            </Typography>
          </Grid>
          <Grid container spacing={3} paddingLeft={5} paddingY={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  State:{" "}
                </Typography>
                {makeFirstLetterCapital(card.address.state)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Country:{" "}
                </Typography>
                {makeFirstLetterCapital(card.address.country)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  City:{" "}
                </Typography>
                {makeFirstLetterCapital(card.address.city)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Street:{" "}
                </Typography>
                {makeFirstLetterCapital(card.address.street)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  House no.:{" "}
                </Typography>
                {card.address.houseNumber}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Zip:{" "}
                </Typography>
                {card.address.zip > 0 && card.address.zip}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        <Grid container spacing={3} paddingX={6}>
          <Grid item xs={12}>
            <Typography fontWeight={700} variant="h5" color="text.secondary">
              Description
            </Typography>
          </Grid>
          <Grid container spacing={3} paddingLeft={5} paddingY={2}>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                {makeFirstLetterCapital(card.description)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

PaperBody.propTypes = {
  card: cardType.isRequired,
};

export default PaperBody;
