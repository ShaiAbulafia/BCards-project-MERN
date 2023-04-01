import React from "react";
import B from "./B";
import NameProvider from "../NameProvider";

const A = () => {
  return (
    <NameProvider>
      <p>in A component </p>
      <B />
    </NameProvider>
  );
};

export default A;
