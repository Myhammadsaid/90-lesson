import React, { useState } from "react";
import logo from "../../assets/logo.avif";
import icon from "../../assets/delete.png";
import Swal from "sweetalert2";
import Skeleton from "../skeleton/Skeleton";
import { motion } from "framer-motion";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/api/productApi";
import "./User.css";
import Model from "../model/Model";
import { Link } from "react-router-dom";

const User = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 100 });
  const [deleteProduct] = useDeleteProductMutation();
  const [model, setModel] = useState(false);

  const handleDeleteProductById = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove product from the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire(
          "Deleted!",
          `Product has been removed from the cart.`,
          "success"
        );
      } else {
        Swal.fire("Cancelled", "Your product is safe", "error");
      }
    });
  };

  let productItems = data?.data?.products?.map((el, index) => (
    <motion.div
      key={el.id}
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3, delay: index * 0.2 }}
      className="user__card"
    >
      <img
        src={logo}
        alt={el.title}
        width={200}
        height={150}
        onClick={() => setModel(!model)}
      />
      <Link to={`/single/${el.id}`}>
        <h2 title={el.title}>{el.title}</h2>
        <h2 title={el.category}>{el.category}</h2>
      </Link>
      <button
        className="user__delete"
        onClick={() => handleDeleteProductById(el.id)}
      >
        <img src={icon} alt="delete" width={30} height={30} />
      </button>
    </motion.div>
  ));

  return (
    <div>
      <section className="user">
        <div className="container">
          <h1>User</h1>
          <div className="user__cards">
            {isLoading ? <Skeleton /> : productItems}
          </div>
        </div>
      </section>
      {model ? <Model setModel={setModel} /> : null}
    </div>
  );
};

export default User;
