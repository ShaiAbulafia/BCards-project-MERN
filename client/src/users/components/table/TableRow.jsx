import React, { useState } from "react";
import { func } from "prop-types";
import TableCell from "@mui/material/TableCell";
import MuiTableRow from "@mui/material/TableRow";
import userType from "../../models/types/userType";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BlockIcon from "@mui/icons-material/Block";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import PaperDialog from "../paper/PaperDialog";
import Tooltip from "@mui/material/Tooltip";

const TableRow = ({ user, onDelete, onChangeStatus, onChangeBlock }) => {
  const navigate = useNavigate();
  const [isDialogOpen, setDialog] = useState(false);

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteUser = () => {
    handleDialog();
    onDelete(user._id);
  };

  return (
    <>
      <MuiTableRow>
        <TableCell align="center">{user.name.first}</TableCell>
        <TableCell align="center">{user.name.last}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">
          {user.isBusiness && (
            <IconButton aria-label="status" disabled>
              <CheckCircleIcon color="success" />
            </IconButton>
          )}
        </TableCell>
        <TableCell align="center">
          {!!user.blockedTill && (
            <IconButton aria-label="blocked" disabled>
              <CheckCircleIcon color="warning" />
            </IconButton>
          )}
        </TableCell>
        <TableCell align="center">
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Tooltip title="View user info">
                <IconButton
                  aria-label="view user"
                  onClick={() => navigate(`${ROUTES.USER_PROFILE}/${user._id}`)}
                >
                  <RemoveRedEyeIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Grid>
            {!user.isAdmin && (
              <Grid item xs={3}>
                <Tooltip title="Change user business status">
                  <IconButton
                    aria-label="change user status"
                    onClick={() => {
                      onChangeStatus(user._id);
                    }}
                  >
                    <BusinessCenterIcon color="success" />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            {!user.isAdmin && (
              <Grid item xs={3}>
                <Tooltip title="Change user 24 hours block">
                  <IconButton
                    aria-label="change user status"
                    onClick={() => {
                      onChangeBlock(user._id, !!!user.blockedTill);
                    }}
                  >
                    <BlockIcon color="warning" />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            {!user.isAdmin && (
              <Grid item xs={3}>
                <Tooltip title="Delete user">
                  <IconButton
                    aria-label="delete user"
                    onClick={() => handleDialog("open")}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
          </Grid>
        </TableCell>
      </MuiTableRow>
      <PaperDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteUser}
      />
    </>
  );
};

TableRow.propTypes = {
  user: userType,
  onDelete: func.isRequired,
  onChangeStatus: func.isRequired,
  onChangeBlock: func.isRequired,
};

export default TableRow;
