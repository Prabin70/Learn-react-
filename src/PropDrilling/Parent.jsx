import React, { useState } from "react";
import Chid from "./Child";
import Child from "./Child";

const Parent = () => {
  console.log("I am parent ");
  //   let [name, setName] = useState("Ram");

  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;
