import React from "react"
import "./email.css"

function Email() {
  return (
    <>
      <div className="email_container">
        <div className="email_container_box">
          <span> Sign To Newsletter</span>
          <input type="email" placeholder="Hotel@gmail.com" />
        </div>
      </div>
    </>
  )
}

export default Email
