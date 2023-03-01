import React from "react";
import Styles from "./Styles.module.css"


const name = "Howard Henson"
const currentDAte = new Date();
const year = currentDAte.getFullYear();
const link = "https://github.com/hahenson"


function Footer (){
  return(
<p className={Styles.footer}>Created by: {name} on {year} • <a href ={link}> MY GITHUB</a></p>
)}

export default Footer;