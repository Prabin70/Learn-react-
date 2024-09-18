import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  console.log("i am child");
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
};

export default Child;
