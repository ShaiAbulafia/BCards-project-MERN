import React from "react";

// const RaisingEventChild = ({ onClick }) => {
//   return (
//     <button onClick={onClick} style={{ padding: 4 }}>
//       click
//     </button>
//   );
// };

// const RaisingEventChild = ({ onClick }) => {
//   return (
//     <button onClick={() => onClick("david")} style={{ padding: 4 }}>
//       click
//     </button>
//   );
// };

const RaisingEventChild = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: 4 }}>
      click
    </button>
  );
};

export default RaisingEventChild;
