import React from "react"
import "./calender.css"
import bedroom from "../../assets/images/bedroom.jpg"

function Calender() {
  return (
    <>
      <div className="calender_container">
        <div className="escape_container">
          <span> Book Your Escape </span>
        </div>
        <div className="calender_gallery">
          <div className="left_calender_gallery">
            <img src={bedroom} />
          </div>
          <div className="right_calender_gallery"></div>
        </div>
      </div>
    </>
  )
}

export default Calender
