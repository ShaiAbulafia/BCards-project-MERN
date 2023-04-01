import React from "react";

const PropsExe = () => {
  return <Child text="ya!!!" second={5} />;
};

// const Child = props => {
//   const { text } = props;
//   return <div>{text}</div>;
// };

// const Child = ({ text }) => {
//   return <div>{text}</div>;
// };

const Child = props => {
  console.log(props);
  return null;
};

export default PropsExe;
