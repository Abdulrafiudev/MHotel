import React from "react"
import "./gallery.css"
import gallery_1 from "../../assets/images/gallery_1.jpg"
import gallery_2 from "../../assets/images/gallery_2.jpg"
import gallery_3 from "../../assets/images/gallery_3.jpg"
import gallery_4 from "../../assets/images/gallery_4.jpg"
import gallery_5 from "../../assets/images/gallery_5.jpg"
import gallery_6 from "../../assets/images/gallery_6.jpg"
import gallery_7 from "../../assets/images/gallery_7.jpg"
import beach from "../../assets/images/beach.jpg"
import { motion } from "framer-motion"

function Gallery() {
  let gallery_cart = [
    {
      image: gallery_1,
      name: "Hotel",
    },
    {
      image: gallery_2,
      name: "Pool",
    },
    {
      image: gallery_3,
      name: "Hangout",
    },
    {
      image: gallery_4,
      name: "Pool",
    },
    {
      image: gallery_5,
      name: "Bedroom",
    },
    {
      image: gallery_6,
      name: "Resort",
    },
    {
      image: gallery_7,
      name: "Resort",
    },
    {
      image: beach,
      name: "Beach",
    },
  ]
  return (
    <>
      <div className="gallery_container">
        <span>Gallery</span>
        <div className="gallery_grid">
          {gallery_cart.map((gallery, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 1 }}
                className="gallery_grid_image"
                key={index}
              >
                <img src={gallery.image} />
                <div className="image_cover">
                  <span> {gallery.name}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery
