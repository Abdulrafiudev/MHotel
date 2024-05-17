import React from "react"
import "./calender.css"
import bedroom from "../../assets/images/bedroom.jpg"
import { motion } from "framer-motion"

function Calender() {
  return (
    <>
      <div className="calender_container">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          className="escape_container"
        >
          <span> Book Your Escape </span>
        </motion.div>
        <div className="calender_gallery">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1 }}
            className="left_calender_gallery"
          >
            <img src={bedroom} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1 }}
            className="right_calender_gallery"
          ></motion.div>
        </div>
      </div>
    </>
  )
}

export default Calender
