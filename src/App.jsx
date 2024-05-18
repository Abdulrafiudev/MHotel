import React from "react"
import "./App.css"
import Header from "./components/header/header"
import Intro from "./components/intro/intro"
import Catalogue from "./components/catalogue/catalogue"
import Display from "./components/display/display"
import Calender from "./components/calender/calender"
import Gallery from "./components/gallery/gallery"
import Email from "./components/email/email"
import Footer from "./components/footer/footer"
import gsap from "gsap"

let tl = gsap.timeline()

function App() {
  return (
    <>
      <div className="app_container">
        <Header />
        <div id="Home">
          <Intro tl={tl} />
        </div>
        <div id="catalogue">
          {" "}
          <Catalogue tl={tl} />
        </div>

        <div id="display">
          <Display />
        </div>

        <div id="calender">
          {" "}
          <Calender />
        </div>

        <div id="gallery">
          {" "}
          <Gallery tl={tl} />
        </div>

        <Email />
        <Footer />
      </div>
    </>
  )
}

export default App
