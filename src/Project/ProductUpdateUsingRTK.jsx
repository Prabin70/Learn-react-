import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import {
  useReadProductByIdQuery,
  useUpdateProductMutation,
} from "../Services/Api/productService";

const ProductUpdateUsingRTK = () => {
  let params = useParams();

  let [updateProduct, { isLoading, isSuccess, isError, error, data }] =
    useUpdateProductMutation();

  let {
    isLoading: readProductLoading,
    isSuccess: readProductSuccess,
    isError: isReadProductError,
    error: readProductError,
    data: readDataById,
  } = useReadProductByIdQuery(params.id);
  console.log(readDataById);

  let product = readDataById?.result || {};

  useEffect(() => {
    if (readProductSuccess) {
      console.log("Id read success");
    }
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(error.error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (readProductError) {
      console.log(readProductError.readProductError);
    }
  }, [readProductError]);

  useEffect(() => {
    if (isSuccess) {
      console.log("updated");
    }
  }, [isSuccess]);

  const onSubmit = async (body) => {
    updateProduct({ id: params.id, body: body });
  };
  return (
    <div>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        Product={product}
      />
    </div>
  );
};

export default ProductUpdateUsingRTK;
