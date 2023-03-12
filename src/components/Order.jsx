import React from 'react';
import { motion } from 'framer-motion';

const Order = ({ pizza }) => {

  const containerVarianats = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        mass: 0.4,
        damping: 8,
        when: 'beforeChildren',
        staggerChildren: 0.4
      }
    }
  }

  const childVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <motion.div className="container order"
      variants={containerVarianats}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>

      <motion.div
        variants={childVariant}
      >
        <p>You ordered a {pizza.base} pizza {pizza.toppings != '' ? 'with' : ""}</p>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;