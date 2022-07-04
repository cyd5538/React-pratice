import * as React from "react";
import { motion } from "framer-motion";
import "./App.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      delayChildren: 1,
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    rotate: 360,
    y: 0,
    opacity: 1

  }
};

const App = () => (
  <>
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="container"
    >
      {[0, 1, 2, 3].map((index) => (
        <motion.li key={index} className="item" variants={item} />
      ))}
    </motion.ul>
  </>
);

export default App;
