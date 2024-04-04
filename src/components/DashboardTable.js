import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./DashboardTable.css";

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

const DashboardTable = () => {
  // Sample data (replace with actual data)
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const data = [
    {
      id: 1,
      trackingId: "#20462",
      product: { image: ProductImageA, name: "Hat" },
      customer: "Matt Dickerson",
      date: "13/05/2022",
      amount: "$100",
      paymentMode: "Tranfer Bank",
      status: "Delivered",
    },
    {
      id: 2,
      trackingId: "#18933",
      product: { image: ProductImageB, name: "Laptop" },
      customer: "Wiktoria",
      date: "22/05/2022",
      amount: "$150",
      paymentMode: "Cash on Delivery",
      status: "Delivered",
    },
    {
      id: 3,
      trackingId: "#45169",
      product: { image: ProductImageC, name: "Phone" },
      customer: "Trixie Byrd",
      date: "15/06/2022",
      amount: "$200",
      paymentMode: "Cash on Delivery",
      status: "Process",
    },
    {
      id: 4,
      trackingId: "#34304",
      product: { image: ProductImageD, name: "Bag" },
      customer: "Brad Mason",
      date: "06/09/2022",
      amount: "$200",
      paymentMode: "Tranfer Bank",
      status: "Process",
    },
    {
      id: 5,
      trackingId: "#34190",
      product: { image: ProductImageE, name: "Headset" },
      customer: "Sanderson",
      date: "25/09/2022",
      amount: "$200",
      paymentMode: "Cash on Delivery",
      status: "Canceled",
    },
    {
      id: 6,
      trackingId: "#74873",
      product: { image: ProductImageF, name: "Mouse" },
      customer: "Jun Redfern",
      date: "04/10/2022",
      amount: "$200",
      paymentMode: "Cash on Delivery",
      status: "Delivered",
    },
    {
      id: 7,
      trackingId: "#45169",
      product: { image: ProductImageG, name: "Clock" },
      customer: "Miriam Kidd",
      date: "17/10/2022",
      amount: "$200",
      paymentMode: "Tranfer Bank",
      status: "Delivered",
    },
    {
      id: 8,
      trackingId: "#68378",
      product: { image: ProductImageH, name: "T-shirt" },
      customer: "Dominic",
      date: "24/10/2022",
      amount: "$200",
      paymentMode: "Tranfer Bank",
      status: "Delivered",
    },
    {
      id: 9,
      trackingId: "#37833",
      product: { image: ProductImageI, name: "Monitor" },
      customer: "Shanice",
      date: "01/11/2022",
      amount: "$200",
      paymentMode: "Cash on Delivery",
      status: "Canceled",
    },
    {
      id: 10,
      trackingId: "#93839",
      product: { image: ProductImageJ, name: "Keyboard" },
      customer: "Poppy-Rose",
      date: "22/11/2022",
      amount: "$200",
      paymentMode: "Tranfer Bank",
      status: "Process",
    },
  ];

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key && a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (sortConfig.key && a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr className="border-none p-5">
            <th className="tableHead">Tracking ID</th>
            <th className="tableHead" onClick={() => sortTable("product")}>
              Product <FaSort className="text-secondary" />
            </th>
            <th className="tableHead" onClick={() => sortTable("customer")}>
              Customer <FaSort className="text-secondary" />
            </th>
            <th className="tableHead" onClick={() => sortTable("date")}>
              Date <FaSort className="text-secondary" />
            </th>
            <th className="tableHead">Amount</th>
            <th className="tableHead">Payment Mode</th>
            <th className="tableHead" onClick={() => sortTable("status")}>
              Status <FaSort className="text-secondary" />
            </th>
            <th className="tableHead">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr className="tableRow" key={item.id}>
              <td className="tableData">{item.trackingId}</td>
              <td className="tableData">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="productImage me-2"
                />
                {"  "}
                {item.product.name}
              </td>{" "}
              <td className="tableData">{item.customer}</td>
              <td className="tableData">{item.date}</td>
              <td className="tableData">{item.amount}</td>
              <td className="tableData">{item.paymentMode}</td>
              <td className="tableData">
                <button
                  className="statusButton"
                  style={{
                    backgroundColor:
                      item.status === "Delivered"
                        ? "#EBF9F1"
                        : item.status === "Process"
                        ? "#FEF2E5"
                        : "#FBE7E8",
                    color:
                      item.status === "Delivered"
                        ? "#1F9254"
                        : item.status === "Process"
                        ? "#CD6200"
                        : "#000000",
                  }}
                >
                  {item.status}
                </button>
              </td>
              <td className="tableData ">
                <div className="d-flex">
                  <FiEdit className="fs-5 text-dark me-2" />
                  <MdOutlineDeleteOutline className="fs-5 text-secondary" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <nav className="" style={{ float: 'right' }}>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link "
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ fontSize: '12px', color: '#9E9E9E', border: 'none' }}
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(sortedData.length / itemsPerPage))].map(
            (_, index) => (
              <li key={index} className="page-item">
                <button
                  className={`page-link me-2 ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                  style={{
                    borderRadius: '10px',
                    background: currentPage === index + 1 ? 'black' : '',
                    color: currentPage === index + 1 ? 'white' : '',
                  }}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}

          <li className="page-item">
            <button
              className="page-link "
              onClick={() => paginate(currentPage  1)}
              disabled={
                currentPage === Math.ceil(sortedData.length / itemsPerPage)
              }
              style={{ fontSize: '12px', color: '#9E9E9E', border: 'none' }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav> */}
      <nav className="" style={{ float: "right" }}>
        <ul className="pagination">
          {/* Previous button */}
          <li className="page-item">
            <button
              className="page-link "
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ fontSize: "12px", color: "#9E9E9E", border: "none" }}
            >
              Previous
            </button>
          </li>
          {/* Page buttons */}
          {[...Array(Math.ceil(sortedData.length / itemsPerPage))].map(
            (_, index) => (
              <li key={index} className="page-item">
                <button
                  className={`page-link me-2 ${
                    currentPage === index + 1 ? "bg-dark text-light" : ""
                  }`}
                  style={{
                    borderRadius: "10px",
                  }}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <button
            className="bg-light text-dark me-2"
            style={{
              borderRadius: "10px",
              width: "30px",
              border: "1px solid #000000",
            }}
          >
            2
          </button>
          <button
            className="bg-light text-dark  me-2"
            style={{
              borderRadius: "10px",
              width: "30px",
              border: "1px solid #000000",
            }}
          >
            3
          </button>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(sortedData.length / itemsPerPage)
              }
              style={{ fontSize: "12px", color: "#9E9E9E", border: "none" }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardTable;
