import React from "react";
import logo from "../../assets/logo.avif";
import { useGetProductDetailsQuery } from "../../context/api/productApi";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "./Single.css";

const Single = () => {
  const { id } = useParams();
  const { data } = useGetProductDetailsQuery(id);

  return (
    <div>
      {data ? (
        <section className="single">
          <div className="container">
            <div className="single__style">
              <motion.img
                initial={{ opacity: 0, translateX: -200 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
                src={logo}
                alt="logo"
              />
              <motion.div
                initial={{ opacity: 0, translateX: 200 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
                className="single__content"
              >
                <h2> {data?.data?.title}</h2>
                <h2> {data?.data?.category}</h2>
                <p>{data?.data?.description}</p>
                <p>{data?.data?.price}$</p>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <div>Mahsulot topilmadi</div>
      )}
    </div>
  );
};

export default Single;
