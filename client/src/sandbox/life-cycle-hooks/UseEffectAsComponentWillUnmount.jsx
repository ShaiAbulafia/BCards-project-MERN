import { useEffect, useState } from "react";
import { colorLog } from "../utils";

const UseEffectAsComponentWillUnmount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
    const int = setInterval(() => {
      setCount(prev => prev + 1);
    }, 2000);

    return () => {
      clearInterval(int);
      colorLog("In useEffect return", "lightgreen");
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      {colorLog("In component return", "red")}
      <p>useEffect as component will unmount</p>
    </div>
  );
};

export default UseEffectAsComponentWillUnmount;
