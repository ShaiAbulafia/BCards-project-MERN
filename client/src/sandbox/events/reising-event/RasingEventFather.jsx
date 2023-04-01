import React from "react";
import RaisingEventChild from "./RaisingEventChild";

const RasingEventFather = () => {
  //   const log = () => console.log("in log");
  //   const logTwo = text => console.log(text);
  const logThree = e => console.log(e.target);

  return (
    <>
      {/* <RaisingEventChild onClick={log} /> */}
      {/* <RaisingEventChild onClick={logTwo} /> */}
      <RaisingEventChild onClick={logThree} />
    </>
  );
};

export default RasingEventFather;
