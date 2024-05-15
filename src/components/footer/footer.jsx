import React from "react"
import "./footer.css"

function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_container_box">
          <div className="footer_detail_container">
            <div className="footer_detail_1">
              <span className="detail_1">Contact Us</span>
              <span className="detail_2">
                {" "}
                Address: 123 Hotel Drive, Anytown, USA 12345{" "}
              </span>
              <span className="detail_2"> Phone: 555-555-5555 </span>
              <span className="detail_2">
                {" "}
                Email: mailto:info@hotelname.com{" "}
              </span>
              <span className="detail_2"> Fax: 555-555-5556</span>
            </div>
            <div className="footer_detail_2">
              <span className="detail_1">Social Media</span>
              <span className="detail_2"> Facebook: @Hotelname</span>
              <span className="detail_2"> Twitter: @Hotelname </span>
              <span className="detail_2"> Instagram: @Hotelname </span>
              <span className="detail_2"> LinkedIn: @Hotelname</span>
            </div>
            <div className="footer_detail_3">
              <span className="detail_1">Legal</span>
              <span className="detail_2"> Privacy Policy</span>
              <span className="detail_2">Accessibility Statement</span>
              <span className="detail_2"> Terms and Condition </span>
            </div>
            <div className="footer_detail_4">
              <span className="detail_1">Helpful Links</span>
              <span className="detail_2"> FAQs</span>
              <span className="detail_2"> Sitemap </span>
              <span className="detail_2"> News Letter </span>
              <input placeholder="Hotel@gmail.com" type="email" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
