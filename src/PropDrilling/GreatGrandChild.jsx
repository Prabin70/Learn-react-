import React, { useContext } from "react";
import { Context } from "../App";

const GreatGrandChild = () => {
  console.log("I am great grand child");
  let value = useContext(Context);
  console.log(value);

  return (
    <div>
      GreatGrandChild
      {value.name}
      <button
        onClick={() => {
          value.setName("Hari");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default GreatGrandChild;
