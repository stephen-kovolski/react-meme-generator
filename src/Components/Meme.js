import React, {useState} from "react";
import memesData from "../memesData";
// component
function Meme(){

    const [memeImage, setMemeImage] = useState("")
// handle click function
    function handleClick(){
         let memesArray = memesData.data.memes;
         let randomNumber = Math.floor(Math.random() * memesArray.length)
         setMemeImage(memesArray[randomNumber].url)
         
    }

    return(
        <div>
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top text" />
                <input type="text" className="form--input" placeholder="bottom text"></input>
                <button className="form--button" onClick={handleClick}>Get A New Meme Image</button>
            </div>
            <img src={memeImage} className="meme--image"/>   
        </main>
        </div>
    )
}

export default Meme;

