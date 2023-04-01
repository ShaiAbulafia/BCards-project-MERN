import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "./../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import { Container, Paper, Typography } from "@mui/material";
import useForm from "../../forms/hooks/useForm";
import useUsers from "./../hooks/useUsers";
import initialSignupForm from "./../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import UserForm from "../components/UserForm";
import { useTheme } from "../../providers/ThemeProvider";

const SignupPage = () => {
  const { isDark } = useTheme();
  const { handleSignup } = useUsers();

  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  const { user } = useUser();

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

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
          Register
        </Typography>
        <UserForm
          data={value.data}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          onReset={rest.handleReset}
          onSubmit={rest.onSubmit}
          setData={rest.setData}
        />
      </Paper>
    </Container>
  );
};
export default SignupPage;
