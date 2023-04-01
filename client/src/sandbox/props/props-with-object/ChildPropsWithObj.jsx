import React from "react";

const ChildPropsWithObj = ({ user }) => {
  const { name, age } = user;

  return (
    <div>
      {name} {age}
    </div>
  );
};

export default ChildPropsWithObj;
