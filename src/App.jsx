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

function App() {
  return (
    <>
      <div className="app_container">
        <Header />
        <div id="Home">
          <Intro />
        </div>
        <div id="catalogue">
          {" "}
          <Catalogue />
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
          <Gallery />
        </div>

        <Email />
        <Footer />
      </div>
    </>
  )
}

export default App
