import React, { useState } from "react";
import { motion } from "framer-motion";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productApi";
import LocalImages from "./LocalImages";
import "./Register.css";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};
const Register = () => {
  const [files, setFiles] = useState("");
  const { formData, handleChange } = useGetInputValue(initialState);
  const [CreateProduct, { isLoading }] = useCreateProductMutation();

  const handleCreateUser = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify({}));
    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    CreateProduct(form);
  };
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.2, stiffness: 200, type: "spring" }}
        className="register"
      >
        <div className="container">
          <h1>Create Product</h1>
          <form onSubmit={handleCreateUser} className="register__form">
            <input
              value={formData.title}
              onChange={handleChange}
              required
              type="text"
              name="title"
              placeholder="Title"
              className="register__input"
              autoComplete="off"
            />
            <input
              value={formData.price}
              onChange={handleChange}
              required
              type="number"
              name="price"
              placeholder="Price"
              className="register__input"
              autoComplete="off"
            />
            <input
              value={formData.oldPrice}
              onChange={handleChange}
              required
              type="number"
              name="oldPrice"
              placeholder="oldPrice"
              className="register__input"
              autoComplete="off"
            />
            <input
              value={formData.category}
              onChange={handleChange}
              required
              type="text"
              name="category"
              placeholder="Category"
              className="register__input"
              autoComplete="off"
            />
            <input
              value={formData.units}
              onChange={handleChange}
              required
              type="string"
              name="units"
              placeholder="Units"
              className="register__input"
              autoComplete="off"
            />
            <textarea
              value={formData.description}
              onChange={handleChange}
              required
              name="description"
              placeholder="Description"
              className="register__input"
            />
            <textarea
              value={formData.info}
              onChange={handleChange}
              required
              name="info"
              placeholder="Info"
              className="register__input"
            />
            <div>
              <input
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                multiple
                accept="image/*"
              />
              <LocalImages files={files} setFiles={setFiles} />
            </div>
            <button disabled={isLoading} className="register__btn">
              Create
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Register;
