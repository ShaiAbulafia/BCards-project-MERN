import { Container } from "@mui/system";
import React, { useState } from "react";
import { func, string } from "prop-types";
import { Button, Grid, Paper as MuiPaper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../providers/ThemeProvider";

const AdminPaper = ({ cardId, onChangeBizNum }) => {
  const { isDark } = useTheme();
  const [bizNum, setBizNum] = useState("");
  const [bizError, setBizError] = useState(null);

  const handleGenBizNo = () => {
    const random = Math.floor(
      Math.random() * (9999999 - 1000000 + 1) + 1000000
    );
    setBizNum(random);
  };

  const handleChangeInput = ({ target }) => {
    if (999999 < target.value && target.value < 10000000) {
      setBizNum(target.value);
      setBizError(null);
      return;
    }
    setBizError("Must be 7 digits number");
    setBizNum(target.value);
  };

  return (
    <Container
      sx={{
        paddingBottom: 5,
      }}
    >
      <MuiPaper
        elevation={3}
        sx={{
          padding: 3,
          textAlign: "center",
          backgroundColor: isDark ? "#333333" : "#00234c",
        }}
      >
        <Typography variant="h4" color="#fff" align="center" marginBottom={3}>
          Admin board
        </Typography>
        <MuiPaper elevation={2} sx={{ padding: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={2} md={3} xs={12}>
              <Typography>Change biz number: </Typography>
            </Grid>
            <Grid item lg={4} md={3} xs={12}>
              <TextField
                fullWidth
                placeholder="Enter new Biz number"
                type="number"
                size="small"
                value={bizNum}
                onChange={handleChangeInput}
                helperText={bizError}
                error={Boolean(bizError)}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Button
                variant="contained"
                onClick={() => {
                  onChangeBizNum(bizNum, cardId);
                  setBizNum("");
                }}
                color="success"
                sx={{ width: "100%" }}
              >
                Change
              </Button>
            </Grid>
            <Grid item md={3} xs={12}>
              <Button
                variant="contained"
                onClick={handleGenBizNo}
                color="primary"
                sx={{ width: "100%" }}
              >
                Generate number
              </Button>
            </Grid>
          </Grid>
        </MuiPaper>
      </MuiPaper>
    </Container>
  );
};

AdminPaper.propTypes = {
  cardId: string.isRequired,
  onChangeBizNum: func.isRequired,
};

export default AdminPaper;
