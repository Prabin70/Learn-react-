import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HitAPI } from "../Services/HitAPI";

const ReadAllProduct = () => {
  let [product, setProduct] = useState([]);

  let navigate = useNavigate();
  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/product",
        method: "GET",
      });
      setProduct(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  let handleDelete = async (id) => {
    try {
      let result = await HitAPI({
        url: `/product/${id}`,
        method: "DELETE",
      });
      console.log(result);
      getData();
    } catch (error) {}
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {product.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              border: "1px solid #000",
              margin: "10px",
              padding: "10px",
              boxShadow: "2px 2px 10px #000",
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
              onClick={() => {
                navigate(`/product/${item._id}`);
              }}
            >
              View
            </button>
            <button
              type="submit"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/product/update/${item._id}`);
              }}
            >
              Edit
            </button>
            <button
              type="submit"
              style={{ background: "red", color: "#fff", cursor: "pointer" }}
              onClick={() => {
                alertToast(item._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
