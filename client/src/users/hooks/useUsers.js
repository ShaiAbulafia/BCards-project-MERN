import { useState, useCallback, useMemo, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { useUser } from "../providers/UserProvider";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import {
  login,
  signup,
  getTheUser,
  updateUser,
  getUsers,
  deleteUser,
  changeUserStatus,
  changeUserBlock,
} from "../services/userApiService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";
import { useSearchParams } from "react-router-dom";

const useUsers = () => {
  const { user, setUser, setToken } = useUser();
  const [curUser, setCurUser] = useState();
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isBus, setBus] = useState(false);
  const [filteredUsers, setFilter] = useState(null);
  const [searchParamas] = useSearchParams();
  const [attempt, setAttempt] = useState(1);
  useAxios();
  const snack = useSnack();
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchParamas.get("u") ?? "");
  }, [searchParamas]);

  useEffect(() => {
    if (users) {
      if (isBus)
        setFilter(
          users.filter(
            (user) =>
              user.isBusiness &&
              (user.name.first.includes(query) ||
                user.name.last.includes(query))
          )
        );
      if (!isBus)
        setFilter(
          users.filter(
            (user) =>
              user.name.first.includes(query) || user.name.last.includes(query)
          )
        );
    }
  }, [users, query, isBus]);

  const requestStatus = useCallback(
    (loading, errorMessages, users, user = null) => {
      setLoading(loading);
      setError(errorMessages);
      setUsers(users);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user) => {
      try {
        setLoading(true);
        user = { ...user, attempt: attempt };
        setAttempt((prev) => prev + 1);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        snack("success", "Logged in");
        requestStatus(false, null, null, userFromLocalStorage);
        navigate(ROUTES.CARDS);
      } catch (error) {
        if (!!error.response) snack("error", error.response.data);
        if (!error.response) snack("error", error.message);
        requestStatus(false, error.message, null);
      }
    },
    [attempt, navigate, requestStatus, setToken, snack]
  );

  const handleLogout = useCallback(() => {
    setLoading(true);
    removeToken();
    requestStatus(false, null, null);
    snack("success", "Logged out");
    navigate(ROUTES.CARDS);
  }, [navigate, requestStatus, snack]);

  const handleSignup = useCallback(
    async (user) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({
          email: user.email,
          password: user.password,
        });
        snack("success", "Signup successfully");
        navigate(ROUTES.CARDS);
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error.message, null);
      }
    },
    [handleLogin, navigate, requestStatus, snack]
  );

  const handleGetUser = useCallback(
    async (userId) => {
      try {
        setLoading(true);
        const user = await getTheUser(userId);
        requestStatus(false, null, null, user);
        return user;
      } catch (error) {
        if (!!error.response) snack("error", error.response.data);
        if (!error.response) snack("error", error.message);
        requestStatus(false, error.message, null, user);
      }
    },
    [requestStatus, snack, user]
  );

  const handleViewUser = useCallback(
    async (userId) => {
      try {
        setLoading(true);
        const user = await getTheUser(userId);
        setCurUser(user);
        setLoading(false);
        setError(null);
        setUsers(null);
        return user;
      } catch (error) {
        if (!!error.response) snack("error", error.response.data);
        if (!error.response) snack("error", error.message);
        requestStatus(false, error.message, null, user);
      }
    },
    [requestStatus, snack, user]
  );

  const handleUpdateUser = useCallback(
    async (userId, normalizedUser) => {
      try {
        setLoading(true);
        const user = await updateUser(userId, normalizedUser);
        requestStatus(false, null, null, user);
        snack("success", "Updated user successfully");
        navigate(ROUTES.MY_CARDS);
        return user;
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error.message, null, user);
      }
    },
    [navigate, requestStatus, snack, user]
  );

  const handleGetUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getUsers();
      requestStatus(false, null, users, user);
      return users;
    } catch (error) {
      requestStatus(false, error.message, null, user);
    }
  }, [requestStatus, user]);

  const handleDeleteUser = useCallback(
    async (userId) => {
      try {
        setLoading(true);
        await deleteUser(userId);
        snack("success", "Deleted user successfully");
        handleGetUsers();
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error.message, null, user);
      }
    },
    [handleGetUsers, requestStatus, snack, user]
  );

  const handleChangeUserStatus = useCallback(
    async (userId) => {
      try {
        setLoading(true);
        await changeUserStatus(userId);
        snack("success", "Changed user status");
        handleGetUsers();
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error.message, null, user);
      }
    },
    [handleGetUsers, requestStatus, snack, user]
  );

  const handleChangeBlock = useCallback(
    async (userId, isBlock) => {
      try {
        setLoading(true);
        await changeUserBlock(userId, isBlock);
        snack("success", "Changed user block");
      } catch (error) {
        snack("error", error.message);
        requestStatus(false, error.message, null, user);
      }
    },
    [requestStatus, snack, user]
  );

  const value = useMemo(() => {
    return {
      isLoading,
      error,
      user,
      users,
      curUser,
      filteredUsers,
    };
  }, [error, isLoading, user, users, curUser, filteredUsers]);

  return {
    value,
    user,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleUpdateUser,
    setBus,
    handleGetUsers,
    handleDeleteUser,
    handleViewUser,
    handleChangeUserStatus,
    handleChangeBlock,
  };
};

export default useUsers;
