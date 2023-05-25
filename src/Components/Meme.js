import React from "react";
import memes from "../memesData";

function Meme(){

    function handleClick(){
         let memesArray = memes.data.memes;
         let randomNumber = Math.floor(Math.random() * memesArray.length)
         const url = memesArray[randomNumber].url
         console.log(url);
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="top text" />
                <input type="text" className="form--input" placeholder="bottom text"></input>
                <button className="form--button" onClick={handleClick}>Get A New Meme Image</button>
            </div>   
        </main>
    )
}

export default Meme;