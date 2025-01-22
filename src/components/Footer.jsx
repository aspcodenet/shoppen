import { useState } from "react"

function Footer({times,hello,setTimesFunc}){
//const Footer = ({times,hello,setTimesFunc}) => {

    const [player,setPlayer] = useState("Foppa")

    // times är variabeln (property GET)
    // setTimes är property SET
    //let times = 100;

    function clickedHandler(){
        // anroipa setTimes som finns app.jsx
        setTimesFunc(times+1)
       // setTimes(times+1)
    }

  return (
    <>
        <footer>
            (C) Stefan <p>Hej hej {times}</p>
            <p>{player}</p>
            <button onClick={clickedHandler} >Öka värdet</button>
        </footer>
    </>
  )
}

export default Footer