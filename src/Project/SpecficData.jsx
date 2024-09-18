import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HitAPI } from "../Services/HitAPI";

const SpecficData = () => {
  let [product, setProduct] = useState("");
  let params = useParams();
  let getData = async () => {
    try {
      let result = await HitAPI({
        url: `/product/${params.id}`,
        method: "GET",
      });
      setProduct(result.data.result);
      //   console.log(result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <img src={product.ProductImage} height={"200px"} />
      <div>Product Name is : {product.Name}</div>
      <div>Quantity is : {product.Quantity} </div>
      <div>Price is : {product.Price} </div>
      <div> Date is : {product.ManufactureDate} </div>

      <div>Company is : {product.Company} </div>
    </div>
  );
};

export default SpecficData;
