import React from "react"
import "./intro.css"
import hotel_image from "../../assets/images/hotel_image.jpg"
import { motion } from "framer-motion"

function Intro() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "100vw" }}
        whileInView={{ x: "0", opacity: 1 }}
        exit={{ opacity: 0, x: "-100vw" }}
        transition={{ duration: 1 }}
        className="intro_container"
      >
        <div className="image_container">
          <img src={hotel_image} className="hotel_image" />
        </div>
        <div className="green_line_container">
          <div className="green_line_piece"></div>
        </div>
      </motion.div>
    </>
  )
}
export default Intro
