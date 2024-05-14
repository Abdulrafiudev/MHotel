import React from "react"
import "./App.css"
import Header from "./components/header/header"
import Intro from "./components/intro/intro"
import Catalogue from "./components/catalogue/catalogue"
import Display from "./components/display/display"

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Catalogue />
      <Display />
    </>
  )
}

export default App
