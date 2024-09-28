import React from "react";
import { useParams } from "react-router-dom";
import { useReadProductByIdQuery } from "../Services/Api/productService";

const ReadSpeificProductRTK = () => {
  let params = useParams();

  let result = useReadProductByIdQuery(params.id);
  //   console.log();

  let product = result?.data?.result;

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

export default ReadSpeificProductRTK;
