import React from "react";
import { useName } from "../NameProvider";

const D = () => {
  const { name } = useName();
  return <div>D {name}</div>;
};

export default D;
