import React, { useEffect, useRef } from "react"
import "./intro.css"
import hotel_image from "../../assets/images/hotel_image.jpg"
import gsap from "gsap"
import { Power3, Power2, Power0, Power1 } from "gsap"
import { useGSAP } from "@gsap/react"

function Intro({ tl }) {
  let container = useRef(null)
  useGSAP(() => {
    let image_container = container.current.firstElementChild
    let img = container.current.firstElementChild.firstElementChild
    console.log(image_container)
    tl.from(image_container, {
      yPercent: -100,
      duration: 1,

      ease: Power1.easeIn,
    }).from(img, { scale: 1.6, duration: 1.5, easeIn: Power0.easeIn }, 0.9)
  })

  return (
    <>
      <div className="intro_container" ref={container}>
        <div className="image_container">
          <img src={hotel_image} className="hotel_image" />
        </div>
        <div className="green_line_container">
          <div className="green_line_piece"></div>
        </div>
      </div>
    </>
  )
}
export default Intro
