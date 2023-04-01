import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import UserFeedback from "../components/UserFeedback";
import { useUser } from "../providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const UserDetailsPage = () => {
  const { id } = useParams();
  const { value, ...rest } = useUsers();
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    rest.handleViewUser(id).then((data) => {
      if (!data) navigate(ROUTES.CARDS);
      if (!user.isAdmin && user._id !== data._id) navigate(ROUTES.CARDS);
    });
  }, []);

  useEffect(() => {
    rest.handleViewUser(id).then((data) => {
      if (!user.isAdmin && user._id !== data._id) navigate(ROUTES.CARDS);
    });
  }, [id]);

  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;
  return (
    <Container>
      <PageHeader
        title="User details page"
        subtitle="here you can see details of the user"
      />
      <UserFeedback
        user={value.curUser}
        isLoading={value.isLoading}
        error={value.error}
      />
    </Container>
  );
};

export default UserDetailsPage;
