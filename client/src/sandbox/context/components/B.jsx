import React from "react";
import C from "./C";
import { useName } from "../NameProvider";
import D from "./D";

const B = () => {
  const { name } = useName();
  return (
    <>
      <p>in B component: {name}</p>
      <C />
      <D />
    </>
  );
};

export default B;
