import React from "react";

// const OnClick = () => {
//   const handleClick = () => console.log("in handleClick");

//   return (
//     <button onClick={handleClick} style={{ padding: 4 }}>
//       Click
//     </button>
//   );
// };

// const OnClick = () => {
//   const handleClick = text => console.log(text);

//   return (
//     <button onClick={() => handleClick("shola")} style={{ padding: 4 }}>
//       Click
//     </button>
//   );
// };

const OnClick = () => {
  const handleClick = e => console.dir(e);

  const handleClicks = (text, e) => {
    console.log(text);
    console.log(e.target);
  };

  return (
    <>
      <button onClick={e => handleClick(e)} style={{ padding: 4 }}>
        Click
      </button>
      <button onClick={handleClick} style={{ padding: 4 }}>
        Click 2
      </button>
      <button onClick={e => handleClicks("hallo", e)} style={{ padding: 4 }}>
        Click 3
      </button>
    </>
  );
};

export default OnClick;
