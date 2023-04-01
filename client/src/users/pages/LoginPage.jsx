import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialLoginFrom from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import { Container, Paper, Typography } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { useTheme } from "../../providers/ThemeProvider";

const LoginPage = () => {
  const { isDark } = useTheme();
  const { user } = useUser();
  const { handleLogin } = useUsers();
  const { value, ...rest } = useForm(
    initialLoginFrom,
    loginSchema,
    handleLogin
  );

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
          Login
        </Typography>
        <Paper>
          <Form
            onSubmit={rest.onSubmit}
            onReset={rest.handleReset}
            onChange={rest.validateForm}
            styles={{ maxWidth: "450px" }}
            to={ROUTES.CARDS}
          >
            <Input
              label="Email"
              name="email"
              type="email"
              data={value.data}
              error={value.errors.email}
              onChange={rest.handleChange}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              data={value.data}
              error={value.errors.password}
              onChange={rest.handleChange}
            />
          </Form>
        </Paper>
      </Paper>
    </Container>
  );
};

export default LoginPage;
