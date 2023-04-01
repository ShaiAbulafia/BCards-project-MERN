import React from "react";

// const Loops = () => {
//   const array = ["one", "two", "three"];

//   return (
//     <div>
//       <ul>
//         {array.map((item, index, array) => (
//           <li key={index}>
//             {index + 1} {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const Loops = () => {
  const array = ["one", "two", "three"];

  return (
    <div>
      <ul>
        {array.map((item, index, array) => {
          // console.log(array);
          return (
            <li key={index}>
              {index + 1} {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Loops;
