import React from "react"
import Header from "./components/header"
import "./App.css"
import Footer from "./components/footer"
import Body from "./components/body"

function App() {
    return(
      <div className="container">
        <Header />
        <Body /> 
        <Footer />
      </div>
    )
}

export default App
