import React, { useEffect, useState } from "react";
import "../LearnCss/mainOne.css";
import { useNavigate } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";
import { HitAPI } from "../Services/HitAPI";
import {
  useDeleteProductMutation,
  useReadProductQuery,
} from "../Services/Api/productService";

const ReadAllProductUsingRTK = () => {
  let [deleteId, setDeleteId] = useState("");
  let {
    isError: isReadProductError,
    isLoading: isReadProductLoading,
    data: readProductData,
    error: readProductError,
  } = useReadProductQuery();

  let [
    deleteProduct,
    {
      isError: isDeleteProductError,
      isLoading: isDeleteProductLoading,
      isSuccess: isDeleteProductSuccess,
      data: isDeleteProductData,
      error: deleteError,
    },
  ] = useDeleteProductMutation();

  let viewData;

  console.log(readProductData);

  let products = readProductData?.data || [];

  let navigate = useNavigate();

  useEffect(() => {
    if (deleteProduct) {
      console.log();
    }
  });

  useEffect(() => {
    if (isReadProductError) {
      // console.log(is.error);
    }
  }, [isReadProductError.readProductData]);

  let handleDelete = async (id) => {
    try {
      let result = await HitAPI({
        url: `/product/${id}`,
        method: "DELETE",
      });
      console.log(result);
      //   getData();
    } catch (error) {}
  };

  let handleEdit = (id) => {
    return () => {
      navigate(`/product/update/${id}`);
    };
  };

  let handleView = (id) => {
    return () => {
      navigate(`/product/${id}`);
    };
  };

  let alertToast = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleDelete(id);
      }
    });
  };

  return (
    <>
      {isReadProductLoading ? (
        <div style={{ fontSize: "50px" }}>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {products.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  // border: "1px solid #000",
                  margin: "10px",
                  padding: "10px",
                  boxShadow: "2px 2px 10px #669bbc",
                }}
              >
                <div>
                  <img
                    src={item.ProductImage}
                    style={{
                      width: "100px",
                      height: "auto",
                      alignSelf: "center",
                    }}
                  />
                </div>

                <div> Item name is {item.Name}</div>
                <div>Item Quantity is {item.Quantity} </div>
                <div>Item Price is {item.Price} </div>
                <br />
                <button
                  type="submit"
                  style={{ cursor: "pointer" }}
                  onClick={handleView(item._id)}
                >
                  View
                </button>
                <button
                  type="submit"
                  style={{ cursor: "pointer" }}
                  onClick={handleEdit(item._id)}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  style={{
                    background: "red",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    deleteProduct(item._id);
                    setDeleteId(item._id);
                    alertToast(item._id);
                  }}
                >
                  {isDeleteProductLoading && deleteId === item._id ? (
                    "Deleting..."
                  ) : (
                    <IoTrashBin />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ReadAllProductUsingRTK;
