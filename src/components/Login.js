import React from "react"
import {Link} from "react-router-dom"
export default function Login(){
  return(
    <>
    <input type="text" placeholder="Enter Your Email"/><br/>
    <input type="text" placeholder="Enter Your Password"/><br/> 
    <Link to="/content"><input type="submit"/></Link>
     </>
  )
}