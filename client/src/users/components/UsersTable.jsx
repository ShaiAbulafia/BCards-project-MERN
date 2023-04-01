import React, { useState } from "react";
import { arrayOf, bool, func } from "prop-types";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import userType from "../models/types/userType";
import Switch from "@mui/material/Switch";
import { Grid, Typography } from "@mui/material";
import UserSearchBar from "./UserSearchbar";
import TableHead from "./table/TableHead";
import TableRow from "./table/TableRow";
import TableBody from "@mui/material/TableBody";

const UsersTable = ({
  users,
  onDelete,
  onChangeBus,
  onChangeStatus,
  onChangeBlock,
}) => {
  return (
    <>
      <Grid container component="span" sx={{ marginBottom: 3 }}>
        <Grid item paddingY={1} md={3} xs={12}>
          <UserSearchBar />
        </Grid>
        <Grid item paddingY={1}>
          <Switch onChange={onChangeBus} />
          Include only business users
        </Grid>
      </Grid>
      {!users.length && (
        <Typography variant="body1" marginTop={3}>
          Oops.. there are no users in database that match the parameters you
          entered!
        </Typography>
      )}
      {!!users.length && (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table
            sx={{ tableLayout: "fixed", minWidth: 900 }}
            aria-label="Users table"
          >
            <TableHead />
            <TableBody>
              {users.map((user) => (
                <TableRow
                  onChangeStatus={onChangeStatus}
                  onDelete={onDelete}
                  user={user}
                  key={user._id}
                  onChangeBlock={onChangeBlock}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

UsersTable.propTypes = {
  users: arrayOf(userType),
  onDelete: func.isRequired,
  onChangeStatus: func.isRequired,
  onChangeBus: func.isRequired,
  onChangeBlock: func.isRequired,
};

export default UsersTable;
