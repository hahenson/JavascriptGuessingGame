import React from "react";
import GuessingGame from "./GuessingGame";
import Styles from "./Styles.module.css"
import Footer from "./Footer.js";

function App() {
// const [] = useState();




return (
  <div className={Styles.background}>


    <GuessingGame />
 
   <Footer />
  </div>
);
}

export default App;