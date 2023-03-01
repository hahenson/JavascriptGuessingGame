import React, {useState, useEffect} from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from "./Styles.module.css"


function GuessingGame (){
  // How many guesses have user made
  const [count, setCount] = useState(null); 
  // The message the user will see throughout the game
  const [msg, setMsg] = useState("Let's get started");
  // This is the random number generate
  const [random, setRandom ] = useState(null);
  // This is the user putting in guess numbers
  const [guess, setGuess] = useState("")


// HELP When I refresh the page the screen should save the game. I do see this 
// in the local storage. 
  useEffect(() => {
  console.log('useEffect')
  if (count === 0) {
    setRandom(JSON.parse(localStorage.getItem("random") || "[]"))
  }else {
    localStorage.setItem("random", JSON.stringify(random));
  setRandom(getRandomInt(random));
  }
}, [])



function getRandomInt(){
let randomNum = ( Math.floor(Math.random() * 100));

localStorage.setItem("randomNumber", JSON.stringify(randomNum))
return randomNum
console.log(randomNum);
}

function Guess() {
  setCount(count + 1)

  if(guess === ""){
  setMsg("Please put a number")
}
  else if  (random == guess ){
    setMsg('🎉You Win🎉')
  }
  else if (random < guess) {
    setMsg("Guess lower👇🏾👇🏾")
  }
  else {
    setMsg("Guess higher ☝🏾☝🏾")
  }

}



function reset() {
  setRandom(getRandomInt());
  setCount(0)
}

const handleChange = (e) => {
  setGuess(e.target.value)
}

return (
<div>
 <h1 className = {Styles.heading}>🔮Howard's Guessing Game🔮</h1>
 <p className={Styles.textcolor}>☘️ Try to Guess my number its between 1 and 100 ☘️</p>
  <p className={Styles.textcolor}>Current guess count: {count}</p>
   <form>
    <input onChange={handleChange} 
    type='text' 
    placeholder = "Guess a number 💬 ">
    </input>
  </form>
  <button className={Styles.button} onClick={Guess}><strong>GUESS NUMBER</strong></button>
    <button className={Styles.button} onClick={reset}><strong>RESET GAME</strong></button> 
    <p className={Styles.textcolor}>{msg}</p>

</div>
)}


export default GuessingGame;