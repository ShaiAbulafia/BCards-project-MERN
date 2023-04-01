import React from "react";
import TableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "../../../providers/ThemeProvider";

const TableHead = () => {
  const { isDark } = useTheme();

  return (
    <>
      <MuiTableHead>
        <TableRow
          sx={{
            backgroundColor: isDark ? "#000" : "#1976d2",
          }}
        >
          <TableCell
            align="center"
            sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
          >
            User name
          </TableCell>
          <TableCell
            align="center"
            sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
          >
            User last name
          </TableCell>
          <TableCell
            align="center"
            sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
          >
            User email
          </TableCell>
          <TableCell
            align="center"
            sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
          >
            Business?
          </TableCell>
          <TableCell
            align="center"
            sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
          >
            Blocked 24H?
          </TableCell>
          <TableCell
            align="center"
            sx={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
          >
            Manage
          </TableCell>
        </TableRow>
      </MuiTableHead>
    </>
  );
};

export default TableHead;
