import React from "react";
import RaisingEventChild from "./RaisingEventChild";

const RaisingEventFather = () => {
  //   const log = () => console.log("in log");
  //   const logTwo = (text) => console.log(text);
  const logThree = (e) => console.log(e.target);

  return (
    <>
      {/* <RaisingEventChild onClick={log} /> */}
      <RaisingEventChild onClick={logThree} />
    </>
  );
};

export default RaisingEventFather;
