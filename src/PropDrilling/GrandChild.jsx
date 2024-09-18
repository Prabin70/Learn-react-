import React from "react";
import GreatGrandChild from "./GreatGrandChild";

const GrandChild = () => {
  console.log("i am grand Child");
  return (
    <div>
      GrandChild
      <GreatGrandChild />
    </div>
  );
};

export default GrandChild;
