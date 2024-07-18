/* eslint-disable no-unused-vars */
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/product_cart.svg";
import list_product_icon from "../../assets/list_product_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" className="add-product-icon" />
          <p>Add product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" className="list-product-icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
