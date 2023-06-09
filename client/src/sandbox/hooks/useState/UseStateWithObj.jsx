import React, { useState } from "react";

const UseStateWithObj = () => {
  const initialName = {
    first: "",
    last: "",
  };
  const [name, setName] = useState(initialName);
  return (
    <div>
      <h5>
        My name is: {name.first} {name.last}
      </h5>
      <input
        type="text"
        placeholder="Enter first name"
        onChange={(e) => setName({ ...name, first: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter last name"
        onChange={(e) => setName({ ...name, last: e.target.value })}
      />
    </div>
  );
};

export default UseStateWithObj;
