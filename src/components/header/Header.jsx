import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  const userData = JSON.parse(localStorage.getItem("user-data"));
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {userData?.role === "admin" || userData?.role === "owner" ? (
        <motion.header
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, stiffness: 200, type: "spring" }}
        >
          <div className="container">
            <nav>
              <Link to={"/"}>
                <div className="logo">
                  <img width={50} height={50} src={logo} alt="logo" />
                  <h3>{userData?.role}</h3>
                </div>
              </Link>
              <div
                id="navbar-responsive"
                className={`nav__link ${toggle ? "open" : ""}`}
              >
                <Link to="/">Login</Link>
                <Link to="/user">User</Link>
                <Link to="/register">Create</Link>
              </div>
              <button
                onClick={() => setToggle(!toggle)}
                className="menu-btn"
                id="menu-btn"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </nav>
          </div>
        </motion.header>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
