import React, { useEffect } from "react";
import { HitAPI } from "../Services/HitAPI";
import ProductForm from "./ProductForm";
import { useCreateProductMutation } from "../Services/Api/productService";
import { useNavigate } from "react-router-dom";

const CreateProductUsingRTK = () => {
  let navigate = useNavigate();
  let [createProduct, { isLoading, isError, isSuccess, error, data }] =
    useCreateProductMutation();

  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
    }
  }, [isSuccess]);

  const onSubmit = async (body) => {
    createProduct(body);
    navigate("/product");
  };
  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        Product=""
        isLoading={isLoading}
      />
    </div>
  );
};

export default CreateProductUsingRTK;
