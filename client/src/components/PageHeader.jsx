import React from "react";
import PropTypes, { string } from "prop-types";
import { Divider, Typography } from "@mui/material";

const PageHeader = ({ title, subtitle, color }) => {
  return (
    <>
      <Typography variant="h3" component="h1" color={color}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" color={color}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  color: string,
};

export default PageHeader;
