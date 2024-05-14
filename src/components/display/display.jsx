import React from "react"
import "./display.css"
import beach from "../../assets/images/beach.jpg"
import resort from "../../assets/images/resort.jpg"

function Display() {
  return (
    <>
      <div className="resort_container">
        <div className="resort_1">
          <div className="left_resort_section">
            <img src={beach} className="beach_image" />
          </div>

          <div className="right_resort_section">
            <span className="right_resort_section_heading">
              welcome to the best hotel in west African
            </span>
            <span className="right_resort_section_detail">
              Welcome to marina Haven, your serene escape nestled in the heart
              of natural beauty. Here, we believe that every moment should be a
              harmonious blend of comfort, elegance, and adventure. Let us
              introduce ourselves.{" "}
            </span>
            <a> More Info</a>
          </div>
        </div>
        <div className="resort_2">
          <div className="right_resort_section">
            <span className="right_resort_section_heading">Our Story</span>
            <span className="right_resort_section_detail">
              At marina Haven, we’ve crafted an oasis where relaxation and
              excitement coexist. Our journey began with a vision: to create a
              haven where weary travelers find solace, families create cherished
              memories, and explorers embark on unforgettable adventures.
            </span>
            <a> More Info</a>
          </div>
          <div className="left_resort_section left_resort_section_pic">
            <img src={resort} className="beach_image resort_image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Display
