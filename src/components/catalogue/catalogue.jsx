import React, { useRef } from "react"
import "./catalogue.css"
import vector_1 from "../../assets/images/vector_1.png"
import vector_2 from "../../assets/images/vector_2.png"
import vector_3 from "../../assets/images/vector_3.png"
import vector_4 from "../../assets/images/vector_4.png"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Power0, Power1, Power2, Power3, Power4 } from "gsap"

function Catalogue({ tl }) {
  let catalogue = useRef(null)
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
  useGSAP(() => {
    let catalogue_heading = catalogue.current.firstElementChild
    console.log(catalogue_heading)
    tl.from(catalogue_heading.firstElementChild, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    }).from(catalogue_heading.lastElementChild, {
      xPercent: -100,
      opacity: 0,
      duration: 1,
    })
  })
  return (
    <>
      <div className="catalogue_container" ref={catalogue}>
        <div className="catalogue">
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
        </div>
      </div>
    </>
  )
}

export default Catalogue
