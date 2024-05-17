import React from "react"
import "./catalogue.css"
import vector_1 from "../../assets/images/vector_1.png"
import vector_2 from "../../assets/images/vector_2.png"
import vector_3 from "../../assets/images/vector_3.png"
import vector_4 from "../../assets/images/vector_4.png"
import { motion } from "framer-motion"

function Catalogue() {
  let catalogue_cart = [
    {
      image: vector_1,
      text_1: "Get Comfort",
      text_2: "Get Comfort",
    },
    {
      image: vector_2,
      text_1: "Dinning",
      text_2: "Get Comfort",
    },
    {
      image: vector_3,
      text_1: "Event Facilities",
      text_2: "Get Comfort",
    },
    {
      image: vector_4,
      text_1: "Recreational",
      text_2: "Get Comfort",
    },
  ]
  return (
    <>
      <div className="catalogue_container">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="catalogue"
        >
          <span> Marina Haven</span>
          <div className="catalogue_box_container">
            <div className="catalogue_align_box">
              {catalogue_cart.map((item, index) => {
                return (
                  <div className="catalogue_box" key={index}>
                    <img src={item.image} />
                    <div className="text_box">
                      <span> {item.text_1} </span>
                      <span> {item.text_2} </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Catalogue
