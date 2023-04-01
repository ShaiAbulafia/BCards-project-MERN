import { useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import UsersFeedback from "../components/UsersFeedback";
import useUsers from "../hooks/useUsers";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";

const UsersPage = () => {
  const {
    value,
    handleGetUsers,
    handleDeleteUser,
    setBus,
    handleChangeUserStatus,
    handleChangeBlock,
  } = useUsers();

  useEffect(() => {
    handleGetUsers();
  }, []);

  const onDeleteUser = useCallback(
    (userId) => {
      handleDeleteUser(userId);
      handleGetUsers();
    },
    [handleDeleteUser, handleGetUsers]
  );

  const onChangeBus = useCallback(() => {
    setBus((prev) => !prev);
  }, [setBus]);

  const onChangeStatus = useCallback(
    async (userId) => {
      await handleChangeUserStatus(userId);
      handleGetUsers();
    },
    [handleChangeUserStatus, handleGetUsers]
  );

  const onChangeBlock = useCallback(
    async (userId, isBlock) => {
      await handleChangeBlock(userId, isBlock);
      handleGetUsers();
    },
    [handleChangeBlock, handleGetUsers]
  );

  if (!value.user) return <Navigate replace to={ROUTES.LOGIN} />;
  if (!value.user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <Container>
        <PageHeader
          title="CRM"
          subtitle="On this page you can find all users and manage them"
        />
        <UsersFeedback
          isLoading={value.isLoading}
          users={value.filteredUsers}
          error={value.error}
          onDelete={onDeleteUser}
          onChangeBus={onChangeBus}
          onChangeStatus={onChangeStatus}
          onChangeBlock={onChangeBlock}
        />
      </Container>
    </>
  );
};

export default UsersPage;
