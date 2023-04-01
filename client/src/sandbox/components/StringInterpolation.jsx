import React from "react";

const StringInterpolation = () => {
  //   console.log("in logic place in the component");
  const text = "hallo";
  console.log(text);
  const obj = { name: "david" };
  //   return <div>{text + " " + (2 + 1)}</div>;
  return <div>{obj.name}</div>;
};

export default StringInterpolation;
