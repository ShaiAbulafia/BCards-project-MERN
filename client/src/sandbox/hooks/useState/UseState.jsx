import React, { useState } from "react";

// const UseState = () => {
//   const [count, setCount] = useState(0);
//   //   const [age, setAge] = useState(0);

//   // const fn = () => { };
//   //   if(true) {};
//   //   const state = {
//   //     count: 0
//   //   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button
//         style={{ padding: 4, margin: 2 }}
//         onClick={() => setCount(prev => prev + 1)}>
//         +
//       </button>
//       <button
//         style={{ padding: 4, margin: 2 }}
//         onClick={() => setCount(prev => prev - 1)}>
//         -
//       </button>
//       <button style={{ padding: 4, margin: 2 }} onClick={() => setCount(0)}>
//         reset
//       </button>
//     </div>
//   );
// };

const UseState = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  const changeCount = term => {
    if (term === "increment") return setCount(prev => prev + 1);
    if (term === "decrement") return setCount(prev => prev - 1);
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button
        style={{ padding: 4, margin: 2 }}
        onClick={() => changeCount("increment")}>
        +
      </button>
      <button
        style={{ padding: 4, margin: 2 }}
        onClick={() => changeCount("decrement")}>
        -
      </button>
      <button style={{ padding: 4, margin: 2 }} onClick={changeCount}>
        reset
      </button>
    </div>
  );
};

export default UseState;
