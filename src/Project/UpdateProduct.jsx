// import axios from "axios";
// import React, { useCallback, useEffect, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateProduct = () => {
//   let [product, setProduct] = useState({});
//   let [Name, setName] = useState("");
//   let [Quantity, setQuantity] = useState(0);
//   let [Price, setPrice] = useState(0);
//   let [Featured, setFeatured] = useState(false);
//   let [ManufactureDate, setManufactureDate] = useState("");
//   let [ProductImage, setProductImage] = useState("");
//   let [Company, setCompany] = useState("");

//   let params = useParams();
//   let navigate = useNavigate();

//   function getYearMonthDay(dateString) {
//     const date = new Date(dateString);
//     const year = date.getUTCFullYear();
//     const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Ensure two digits
//     const day = String(date.getUTCDate()).padStart(2, "0"); // Ensure two digits
//     return `${year}-${month}-${day}`; // Format to yyyy-MM-dd
//   }

//   let Companies = [
//     { label: "Choose a company" },
//     { label: "Apple", value: "apple" },
//     { label: "Dell", value: "dell" },
//     { label: "Samsung", value: "samsung" },
//     { label: "lenovo", value: "lenovo" },
//   ];

//   const onDrop = useCallback(async (acceptedFiles) => {
//     let fileData = acceptedFiles[0];
//     let data = new FormData();
//     data.append("document", fileData);
//     try {
//       let result = await axios({
//         url: `http://localhost:3000/file/single`,
//         method: "POST",
//         data: data,
//       });
//       setProductImage(result.data.result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let data = {
//       Name: Name,
//       Quantity: Quantity,
//       Price: Price,
//       Featured: Featured,
//       ManufactureDate: ManufactureDate,
//       ProductImage: ProductImage,
//     };
//     try {
//       let result = await axios({
//         url: `http://localhost:3000/product/${params.id}`,
//         method: "PATCH",
//         data: data,
//       });
//       console.log(result);
//       setProduct(result.data.result);
//     } catch (error) {}
//   };

//   const specificProduct = async () => {
//     try {
//       let result = await axios({
//         url: `http://localhost:3000/product/${params.id}`,
//         method: "GET",
//       });
//       console.log(result);
//       let data = result.data.result;
//       setName(data.Name);
//       setQuantity(data.Quantity);
//       setPrice(data.Price);
//       setFeatured(data.Featured);
//       setManufactureDate(getYearMonthDay(data.ManufactureDate));
//       setProductImage(data.ProductImage);
//       setCompany(data.Company);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     specificProduct();
//   }, []);

//   return (
//     <div>
//       <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="ProductName"
//             value={Name}
//             style={{ margin: "10px" }}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             placeholder="Quantity"
//             value={Quantity}
//             style={{ margin: "10px" }}
//             onChange={(e) => {
//               setQuantity(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             placeholder="Price"
//             value={Price}
//             style={{ margin: "10px" }}
//             onChange={(e) => {
//               setPrice(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label>Featured</label>
//           <input
//             type="checkbox"
//             value={Featured}
//             style={{ margin: "10px" }}
//             checked={Featured === true}
//             onChange={(e) => {
//               setFeatured(e.target.checked);
//             }}
//           />
//         </div>
//         <div
//           {...getRootProps()}
//           style={{ border: "1px solid black", width: "300px" }}
//         >
//           <label>Product Image : </label>
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p>Drop the files here ...</p>
//           ) : (
//             <p>Drag and drop some files here, or click to select files</p>
//           )}
//           {ProductImage ? (
//             <img
//               src={ProductImage}
//               alt="Product Image"
//               height={"100px"}
//               width={"100px"}
//             ></img>
//           ) : null}
//           {/* <input
//             type="file"
//             placeholder=""
//             value={ProductImage}
//             style={{ margin: "10px" }}
//             onChange={(e) => {
//               setProductImage(e.target.value);
//             }}
//           /> */}
//         </div>
//         <div>
//           <input
//             type="date"
//             placeholder="Manufactured Date"
//             value={product.ManufactureDate}
//             style={{ margin: "10px" }}
//             onChange={(e) => {
//               setManufactureDate(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <select
//             style={{ margin: "10px" }}
//             value={Company}
//             onChange={(e) => {
//               setCompany(e.target.value);
//             }}
//           >
//             {Companies.map((value, index) => {
//               return (
//                 <option
//                   key={index}
//                   value={value.value}
//                   label={value.label}
//                 ></option>
//               );
//             })}
//           </select>
//         </div>
//         <button type="submit" style={{ margin: "10px" }}>
//           Update Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProduct;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HitAPI } from "../Services/HitAPI";
import ProductForm from "./ProductForm";

const UpdateProduct = () => {
  const [product, setProduct] = useState("");
  let params = useParams();

  let getData = async () => {
    try {
      let result = await HitAPI({
        url: `/product/${params.id}`,
        method: "GET",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async () => {
    let result = await HitAPI({
      url: `/${params.id}`,
      method: "PATCH",
      data: data,
    });
    console.log(result);
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

export default UpdateProduct;
