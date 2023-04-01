import React from "react";
import { string, bool } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Typography from "@mui/material/Typography";
import Paper from "./paper/Paper";
import userType from "../models/types/userType";

const UserFeedback = ({ isLoading, error, user }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!user)
    return (
      <Typography variant="body1">
        Oops.. cant find the user in database that you were looking for!
      </Typography>
    );
  if (user) return <Paper user={user} />;
  return null;
};

UserFeedback.propTypes = {
  user: userType,
  isLoading: bool.isRequired,
  error: string,
};

export default UserFeedback;
