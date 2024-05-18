import React from "react"
import "./email.css"
import { motion } from "framer-motion"

function Email() {
  return (
    <>
      <div className="email_container">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="email_container_box"
        >
          <span> Sign To Newsletter</span>
          <input type="email" placeholder="Hotel@gmail.com" />
        </motion.div>
      </div>
    </>
  )
}

export default Email
