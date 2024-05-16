import React from "react"
import "./header.css"
import logo_1 from "../../assets/images/logo_1.png"
import logo_2 from "../../assets/images/logo_2.png"
import { Link } from "react-scroll"

function Header() {
  function handle_click() {
    document.querySelector(`.hamburger`).classList.toggle(`active`)
    document.querySelector(`.middle_header_section`).classList.toggle(`active`)
  }
  function hanle_list_click() {
    document.querySelector(`.hamburger`).classList.remove(`active`)
    document.querySelector(`.middle_header_section`).classList.remove(`active`)
  }
  return (
    <>
      <div className="header">
        <div className="header_text">
          <div className="header_text_container">
            {" "}
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="main_header_container">
          <div className="main_header">
            <div className="left_header_section">
              <img src={logo_1} />
              <img src={logo_2} />
              <span>otel</span>
            </div>
            <div className="middle_header_section">
              <ul>
                <div className="list_container">
                  <Link to="Home" smooth={true} spy={true}>
                    {" "}
                    <li onClick={hanle_list_click}> Home </li>
                  </Link>

                  <div className="green_line"></div>
                </div>

                <div className="list_container">
                  <Link to="catalogue" smooth={true} spy={true}>
                    {" "}
                    <li onClick={hanle_list_click}> Dinning </li>
                  </Link>

                  <div className="green_line"></div>
                </div>

                <div className="list_container">
                  <Link to="gallery" smooth={true} spy={true}>
                    {" "}
                    <li onClick={hanle_list_click}> Gallery </li>
                  </Link>

                  <div className="green_line"></div>
                </div>

                <div className="list_container">
                  <Link to="display" smooth={true} spy={true}>
                    <li onClick={hanle_list_click}> Meetings & Banqueting </li>
                  </Link>

                  <div className="green_line"></div>
                </div>

                <div className="list_container">
                  <Link to="calender" smooth={true} spy={true}>
                    {" "}
                    <li onClick={hanle_list_click}> Events </li>
                  </Link>

                  <div className="green_line"></div>
                </div>
              </ul>
            </div>
            <div className="right_header_section">
              <a> Book Now</a>
              <div className="hamburger" onClick={handle_click}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
