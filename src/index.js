import React from "react"
import ReactDOM from "react-dom"
import App from "./App"



  const cursor = document.querySelector('.cursor'); 
  document.addEventListener('mousemove', e  =>{
    console.log(e);
    cursor.setAtrribute("style", "top:"+e.pageY)
  })
 
ReactDOM.render(<App/> , document.getElementById("root"))