import React from "react";
import useForm from "./../../forms/hooks/useForm";
import initialCardForm from "./../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schemas/cardSchema";
import useCards from "./../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container, Paper, Typography } from "@mui/material";
import CardForm from "../components/CardForm";
import { useTheme } from "../../providers/ThemeProvider";

const CreateCardPage = () => {
  const { isDark } = useTheme();
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleCreateCard
  );

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, backgroundColor: isDark ? "#333333" : "#1976d2" }}
      >
        <Typography variant="h3" component="h1" color="#fff" align="center">
          New card
        </Typography>
        <CardForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      </Paper>
    </Container>
  );
};

export default CreateCardPage;
