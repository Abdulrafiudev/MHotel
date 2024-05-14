import React from "react"
import "./intro.css"
import hotel_image from "../../assets/images/hotel_image.jpg"

function Intro() {
  return (
    <>
      <div className="intro_container">
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