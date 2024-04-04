import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Form, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import DashboardTable from "./DashboardTable";
import AddCustomerDrawer from "./AddCustomerDrawer";

import ProductImageA from "../Assets/unsplash_h0AnGGgseio.png";
import ProductImageB from "../Assets/unsplash_Gi3iUJ1FwxI.png";
import ProductImageC from "../Assets/unsplash_yNyTV1DvmPI.png";
import ProductImageD from "../Assets/unsplash_ZmeFtu11Hpc.png";
import ProductImageE from "../Assets/unsplash_lUMj2Zv5HUE.png";
import ProductImageF from "../Assets/unsplash_ZtxED1cpB1E.png";
import ProductImageG from "../Assets/unsplash_L0xOtAnv94Y.png";
import ProductImageH from "../Assets/unsplash_tWOz2_EK5EQ.png";
import ProductImageI from "../Assets/unsplash_183F_vNaN8A.png";
import ProductImageJ from "../Assets/unsplash_KYw1eUx1J7Y.png";

const DashboardTableHead = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  const products = [
    { id: 1, name: "Hat", image: ProductImageA },
    { id: 2, name: "Laptop", image: ProductImageB },
    { id: 3, name: "Phone", image: ProductImageC },
    { id: 4, name: "Bag", image: ProductImageD },
    { id: 5, name: "Headset", image: ProductImageE },
    { id: 6, name: "Mouse", image: ProductImageF },
    { id: 7, name: "Clock", image: ProductImageG },
    { id: 8, name: "T-shirt", image: ProductImageH },
    { id: 9, name: "Moniter", image: ProductImageI },
    { id: 10, name: "Keyboard", image: ProductImageJ },

    // Add more products as needed
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mt-3 d-flex">
          <span
            className="me-2 showtext"
            style={{ fontSize: "14px", lineHeight: "2rem" }}
          >
            Show
          </span>
          <div style={{ width: "66px" }} className="me-2">
            <Form.Select
              aria-label="Default select example"
              style={{ fontSize: "14px", backgroundColor: "#9E9E9E" }}
              className="text-dark"
            >
              <option>10</option>
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">40</option>
              <option value="4">50</option>
              <option value="5">60</option>
              <option value="6">70</option>
              <option value="7">80</option>
              <option value="8">90</option>
              <option value="9">100</option>
            </Form.Select>
            <MdOutlineArrowDropDown style={{ color: "white" }} />
          </div>
          <span
            className="me-2 showtext"
            style={{ fontSize: "14px", lineHeight: "2rem" }}
          >
            entries
          </span>
        </div>
        <div className="col-md-8 mt-3">
          <Button
            variant="dark"
            className="d-flex float-end align-items-center"
            onClick={showDrawer} // Open drawer on button click
          >
            <IoMdAdd className="fs-6 me-2 text-white" />
            <span className="text-white">Add Customer</span>
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <DashboardTable />
      </div>{" "}
      <AddCustomerDrawer
        visible={isDrawerVisible}
        onClose={onClose}
        products={products}
      />
    </div>
  );
};

export default DashboardTableHead;
