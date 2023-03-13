import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
const buttonVaraint = {
  hover: {
    scale: [1.1, 1, 1.1, 1, 1.1],
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        repeat: Infinity,
        duration: .8
      }
    }
}

  return (
    <motion.div className="home container">
      <motion.h2
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ delay: 0.2, duration: 0.3}}
      >
        Welcome to Pizza Place
      </motion.h2>
      <Link to="/base">
        <motion.button
        variants={buttonVaraint}
        whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;