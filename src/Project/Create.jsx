// import axios from "axios";
// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";

// const Create = () => {
//   let [Name, setName] = useState("");
//   let [Quantity, setQuantity] = useState("");
//   let [Price, setPrice] = useState("");
//   let [Featured, setFeatures] = useState("false");
//   let [ProductImage, setProductImage] = useState("");
//   let [ManufactureDate, setManufactureDate] = useState("");
//   let [Company, setcompany] = useState("");

//   let companies = [
//     { label: "Choose a company" },
//     { label: "Apple", value: "apple" },
//     { label: "Dell", value: "dell" },
//     { label: "Samsung", value: "samsung" },
//     { label: "lenovo", value: "lenovo" },
//   ];

//   const onDrop = useCallback(async (acceptedFiles) => {
//     // Do something with the files

//     let fileData = acceptedFiles[0];
//     let data = new FormData();
//     data.append("document", fileData);
//     try {
//       let result = await axios({
//         url: `http://localhost:3000/file/single`,
//         method: "POST",
//         data: data,
//       });
//       console.log(result);
//       setProductImage(URL.createObjectURL(fileData));
//     } catch (error) {}
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     multiple: true,
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
//       Company: Company,
//     };

//     try {
//       let result = await axios({
//         url: `http://localhost:3000/product`,
//         method: "POST",
//         data: data,
//       });
//       console.log(result);
//       setName("");
//       setQuantity("");
//       setPrice("");
//       setFeatures("");
//       setManufactureDate("");
//       setProductImage("");
//       setcompany("");
//     } catch (error) {}
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
//         <div>
//           <input
//             required
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
//             required
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
//             required
//             type="checkbox"
//             value={Featured}
//             style={{ margin: "10px" }}
//             checked={Featured === true}
//             onChange={(e) => {
//               setFeatures(e.target.checked);
//             }}
//           />
//         </div>
//         <div {...getRootProps()}>
//           {/* <input
//             type="file"
//             placeholder=""
//             value={productImage}
//             style={{ margin: "10px" }}
//           /> */}

//           <input {...getInputProps()} required></input>
//           {isDragActive ? (
//             <p>Drop the files here ...</p>
//           ) : (
//             <p>Drag 'n' drop some files here, or click to select files</p>
//           )}

//           {ProductImage ? (
//             <img
//               src={ProductImage}
//               style={{ height: "300px", width: "300px" }}
//               alt="product image"
//             />
//           ) : null}
//         </div>
//         <div>
//           <input
//             required
//             type="date"
//             placeholder="Manufactured Date"
//             value={ManufactureDate}
//             style={{ margin: "10px" }}
//             onChange={(e) => {
//               setManufactureDate(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           {/* <select style={{ margin: "10px" }}>
//             <option>Apple</option>
//             <option>Dell</option>
//             <option>HP</option>
//             <option>Lenovo</option>
//           </select> */}
//           <label htmlFor="company">Company</label>
//           <select
//             required
//             value={Company}
//             onChange={(e) => {
//               setcompany(e.target.value);
//             }}
//           >
//             {companies.map((item, i) => {
//               return (
//                 <option key={i} value={item.value}>
//                   {item.label}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <button type="submit" style={{ margin: "10px" }}>
//           Create Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Create;

import React from "react";
import { HitAPI } from "../Services/HitAPI";
import ProductForm from "./ProductForm";

const Create = () => {
  const onSubmit = async (data) => {
    try {
      let result = await HitAPI({
        url: "/product",
        method: "POST",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };
  return (
    <div>
      <ProductForm buttonName="Create Product" onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
