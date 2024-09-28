import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ReadAllProductUsingRTK from "./ReadAllProductUsingRTK";
import ReadSpeificProductRTK from "./ReadSpecificProductRTK";
import UpdateProduct from "./UpdateProduct";
import CreateProductUsingRTK from "./CreateProductUsingRTK";
import ProductUpdateUsingRTK from "./ProductUpdateUsingRTK";

const Project = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar /> <Outlet /> <Footer />
            </div>
          }
        >
          <Route index element={<div>Welcome to Project Page</div>} />
          <Route path="product" element={<Outlet />}>
            {/* <Route index element={<ReadAllProduct />}></Route> */}
            <Route index element={<ReadAllProductUsingRTK />} />
            {/* <Route path="create" element={<Create />} /> */}

            <Route path="create" element={<CreateProductUsingRTK />} />
            {/* <Route path=":id" element={<SpecficData />} /> */}
            <Route path=":id" element={<ReadSpeificProductRTK />} />

            <Route path="update/:id" element={<ProductUpdateUsingRTK />} />
            {/* <Route path="update/:id" element={<UpdateProduct />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project;
