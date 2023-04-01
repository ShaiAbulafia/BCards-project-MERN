import React from "react";
import userType from "../../models/types/userType";
import { Grid, Divider, Stack, Typography, Paper } from "@mui/material";
import { makeFirstLetterCapital } from "../../../utils/algoMethods";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useUser } from "../../providers/UserProvider";

const PaperBody = ({ userObj }) => {
  const { user } = useUser();
  const date = new Date(userObj.createdAt);

  return (
    <>
      <Paper elevation={3} sx={{ marginTop: 3, paddingY: 3 }}>
        <Grid container spacing={3} paddingX={6}>
          <Grid item xs={12}>
            <Typography fontWeight={700} variant="h5" color="text.secondary">
              Name
            </Typography>
          </Grid>
          <Grid container spacing={3} paddingLeft={5} paddingY={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  First:{" "}
                </Typography>
                {userObj.name.first}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  middle:{" "}
                </Typography>
                {userObj.name.middle}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Last:{" "}
                </Typography>
                {userObj.name.last}
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
                {userObj.address.state !== "not defined" &&
                  makeFirstLetterCapital(userObj.address.state)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Country:{" "}
                </Typography>
                {makeFirstLetterCapital(userObj.address.country)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  City:{" "}
                </Typography>
                {makeFirstLetterCapital(userObj.address.city)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Street:{" "}
                </Typography>
                {makeFirstLetterCapital(userObj.address.street)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  House no.:{" "}
                </Typography>
                {userObj.address.houseNumber}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Zip:{" "}
                </Typography>
                {userObj.address.zip > 0 && userObj.address.zip}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={3} paddingX={6}>
          <Grid item xs={12}>
            <Typography fontWeight={700} variant="h5" color="text.secondary">
              Status
            </Typography>
          </Grid>
          <Grid container spacing={3} paddingLeft={5} paddingY={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                component="div"
              >
                <Typography
                  fontWeight={700}
                  variant="body1"
                  color="text.secondary"
                >
                  Business:{" "}
                </Typography>
                {userObj.isBusiness && <CheckCircleIcon color="success" />}
                {!userObj.isBusiness && <HighlightOffIcon color="error" />}
              </Stack>
            </Grid>

            {user.isAdmin && (
              <Grid item xs={12} sm={6} md={4}>
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={1}
                  component="div"
                >
                  <Typography
                    fontWeight={700}
                    variant="body1"
                    color="text.secondary"
                  >
                    Admin:{" "}
                  </Typography>
                  {userObj.isAdmin && <CheckCircleIcon color="success" />}
                  {!userObj.isAdmin && <HighlightOffIcon color="error" />}
                </Stack>
              </Grid>
            )}

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" color="text.secondary">
                <Typography fontWeight={700} component="span">
                  Created at:{" "}
                </Typography>
                {date.toLocaleDateString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

PaperBody.propTypes = {
  userObj: userType.isRequired,
};

export default PaperBody;
