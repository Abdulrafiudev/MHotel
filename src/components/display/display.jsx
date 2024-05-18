import React from "react"
import "./display.css"
import beach from "../../assets/images/beach.jpg"
import resort from "../../assets/images/resort.jpg"
import { motion } from "framer-motion"

function Display() {
  return (
    <>
      <div className="resort_container">
        <div className="resort_1">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
            className="left_resort_section"
          >
            <img src={beach} className="beach_image" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
            className="right_resort_section"
          >
            <span className="right_resort_section_heading">
              welcome To The Best Botel In West African
            </span>
            <span className="right_resort_section_detail">
              Welcome to marina Haven, your serene escape nestled in the heart
              of natural beauty. Here, we believe that every moment should be a
              harmonious blend of comfort, elegance, and adventure. Let us
              introduce ourselves.{" "}
            </span>
            <a> More Info</a>
          </motion.div>
        </div>
        <div className="resort_2">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
            className="right_resort_section"
          >
            <span className="right_resort_section_heading">Our Story</span>
            <span className="right_resort_section_detail">
              At marina Haven, we’ve crafted an oasis where relaxation and
              excitement coexist. Our journey began with a vision: to create a
              haven where weary travelers find solace, families create cherished
              memories, and explorers embark on unforgettable adventures.
            </span>
            <a> More Info</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
            className="left_resort_section left_resort_section_pic order"
          >
            <img src={resort} className="beach_image resort_image" />
          </motion.div>
        </div>
        <div className="diplay_green_line">
          <div className="diplay_green_line"></div>
        </div>
      </div>
    </>
  )
}

export default Display
