import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.avif";
import { motion } from "framer-motion";
import "./Model.css";

const Model = ({ setModel }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <div onClick={() => setModel(false)} className="overflow"></div>
      <div className="model">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {Array(9)
              .fill("")
              .map((_, inx) => (
                <motion.div key={inx} className="item">
                  <img width={200} src={logo} alt="img" />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Model;
