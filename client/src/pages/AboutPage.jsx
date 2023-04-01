import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "../providers/ThemeProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const AboutPage = () => {
  const { isDark } = useTheme();
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={700}>
                Welcome to the business cards site
              </Typography>
              <Typography variant="body1">
                Here you can find diverse database of business which you can
                view, add to favorites for easy access and get contact info.
              </Typography>

              <Typography variant="h4" fontWeight={700} paddingTop={5}>
                Why should I register?
              </Typography>
              <Typography variant="body1">
                Registered users can mark favorites cards for easy access
                throught FAV CARDS tab. Business registered users can create
                business cards for everyone to view and contact.
              </Typography>
              <Typography variant="body1">check out our users plan!</Typography>

              <Typography
                variant="h4"
                fontWeight={700}
                paddingTop={5}
                paddingBottom={2}
              >
                Users plan
              </Typography>

              <TableContainer component={Paper}>
                <Table
                  sx={{ tableLayout: "fixed", minWidth: 300 }}
                  aria-label="Users table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: isDark ? "#000" : "#1976d2",
                      }}
                    >
                      <TableCell
                        sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
                      >
                        Plan
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
                      >
                        View
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
                      >
                        Favorites
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
                      >
                        Own cards
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>Visitor</TableCell>
                      <TableCell align="center">
                        <CheckCircleIcon color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <HighlightOffIcon color="error" />
                      </TableCell>
                      <TableCell align="center">
                        <HighlightOffIcon color="error" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>Registered</TableCell>
                      <TableCell align="center">
                        <CheckCircleIcon color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <CheckCircleIcon color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <HighlightOffIcon color="error" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>Business</TableCell>
                      <TableCell align="center">
                        <CheckCircleIcon color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <CheckCircleIcon color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <CheckCircleIcon color="success" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
