import React from "react";
import NavBar from "./NavBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Create from "./Create";
import ReadAllProduct from "./ReadAllProduct";
import Footer from "./Footer";
import SpecficData from "./SpecficData";
import UpdateProduct from "./UpdateProduct";

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
          <Route index element={<div>Welcome to Project Page</div>}></Route>
          <Route path="product" element={<Outlet />}>
            <Route index element={<ReadAllProduct />}></Route>
            <Route path="create" element={<Create />}></Route>
            <Route path=":id" element={<SpecficData />}></Route>
            <Route path="update/:id" element={<UpdateProduct />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project;
