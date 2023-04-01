import React from "react";
import ChildPropsWithObj from "./ChildPropsWithObj";

const FatherPropsWithObj = () => {
  const user = { name: "artium", age: 24, height: 189 };

  return <ChildPropsWithObj user={user} />;
};

export default FatherPropsWithObj;
