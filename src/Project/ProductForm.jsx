import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { HitAPI } from "../Services/HitAPI";

const ProductForm = ({
  buttonName = "",
  onSubmit = () => {},
  Product = {},
}) => {
  let [Name, setName] = useState(Product?.Name || "");
  let [Quantity, setQuantity] = useState(Product?.Quantity || "");
  let [Price, setPrice] = useState(Product?.Price || "");
  let [Featured, setFeatures] = useState(Product?.Featured || "");
  let [ProductImage, setProductImage] = useState(Product?.ProductImage || "");
  let [ManufactureDate, setManufactureDate] = useState(
    Product?.ManufactureDate || ""
  );
  let [Company, setcompany] = useState(Product?.Company || "");

  let companies = [
    { label: "Choose a company" },
    { label: "Apple", value: "apple" },
    { label: "Dell", value: "dell" },
    { label: "Samsung", value: "samsung" },
    { label: "lenovo", value: "lenovo" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files

    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);
    try {
      let result = await HitAPI({
        url: `/file/single`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setProductImage(URL.createObjectURL(fileData));
    } catch (error) {}
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // multiple: true,
  });
  // const formatDate = (isoString) => {
  //   const date = new Date(isoString);
  //   let year = date.getFullYear();
  //   let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  //   let day = date.getDate().toString().padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // };

  useEffect(() => {
    if (Product && Object.keys(Product).length > 0) {
      setName(Product?.Name || "");
      setQuantity(Product?.Quantity || "");
      setPrice(Product?.Price || "");
      setFeatures(Product?.Featured || "");
      setManufactureDate(Product?.ManufactureDate || "");
      setProductImage(Product?.ProductImage || "");
      setcompany(Product?.Company || "");
    }
  }, [Product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Name,
      Quantity,
      Price,
      Featured,
      ManufactureDate,
      ProductImage,
      Company,
    };
    onSubmit(formData);
    // setName("");
    // setQuantity("");
    // setPrice("");
    // setFeatures("");
    // setManufactureDate("");
    // setProductImage("");
    // setcompany("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
        <div>
          <input
            required
            type="text"
            placeholder="ProductName"
            value={Name}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            required
            type="number"
            placeholder="Quantity"
            value={Quantity}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            value={Price}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Featured</label>
          <input
            required
            type="checkbox"
            value={Featured}
            style={{ margin: "10px" }}
            checked={Featured === true}
            onChange={(e) => {
              setFeatures(e.target.checked);
            }}
          />
        </div>
        <div {...getRootProps()}>
          {/* <input
            type="file"
            placeholder=""
            value={ProductImage}
            style={{ margin: "10px" }}
          /> */}

          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}

          {ProductImage ? (
            <img
              src={ProductImage}
              style={{ height: "300px", width: "auto" }}
              alt="product image"
            />
          ) : null}
        </div>
        <div>
          <input
            required
            type="date"
            placeholder="Manufactured Date"
            value={ManufactureDate}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setManufactureDate(e.target.value);
            }}
          />
        </div>
        <div>
          {/* <select style={{ margin: "10px" }}>
            <option>Apple</option>
            <option>Dell</option>
            <option>HP</option>
            <option>Lenovo</option>
          </select> */}
          <label htmlFor="company">Company</label>
          <select
            required
            value={Company}
            onChange={(e) => {
              setcompany(e.target.value);
            }}
          >
            {companies.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" style={{ margin: "10px" }}>
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
