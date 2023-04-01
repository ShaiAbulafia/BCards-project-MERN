import React from "react";
import "./styles.css";

const Styles = ({ sx = {} }) => {
  const isGreen = true;
  // const isGreen = false;
  // const grayStyle = { backgroundColor: "gray" };

  // const obj = { name: "david" };
  // const second = { ...obj };
  // const objX = second;
  // second.key = "3";

  // console.log(obj);
  // console.log(second);
  // console.log(objX);

  return (
    <>
      {/* <h1 style={{ color: "red", backgroundColor: "black" }}>one</h1>
      <h1
        style={
          isGreen
            ? { color: "green", backgroundColor: "black" }
            : { color: "red", backgroundColor: "white" }
        }>
        two
      </h1>
      <h1 className="cursor">three</h1>
      <h1 className="blue" style={{ color: "blue", color: "red" }}>
        four
      </h1> */}
      <h1 style={{ color: "blue", ...sx }}>five</h1>
      {/* <h1 style={grayStyle}>six</h1> */}
    </>
  );
};

export default Styles;
