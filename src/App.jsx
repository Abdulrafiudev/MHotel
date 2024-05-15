import React from "react"
import "./App.css"
import Header from "./components/header/header"
import Intro from "./components/intro/intro"
import Catalogue from "./components/catalogue/catalogue"
import Display from "./components/display/display"
import Calender from "./components/calender/calender"
import Gallery from "./components/gallery/gallery"
import Email from "./components/email/email"

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Catalogue />
      <Display />
      <Calender />
      <Gallery />
      <Email />
    </>
  )
}

export default App
