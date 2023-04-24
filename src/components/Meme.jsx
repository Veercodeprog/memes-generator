import React from "react";
import memesData from "../memesData";

export default function Meme() {
//   const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bhk.jpg");

const [meme, setMeme] = React.useState({

topText : "",
bottomText:"",
randomImage:"https://i.imgflip.com/1bhk.jpg"

})

  function getMemeImage() {
  event.preventDefault();
   const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
const url = memesArray[randomNumber].url ;

setMeme(prevState => ({
...prevState,
randomImage: url
}));
  }

  return (
    <main>
      <div className="form">
        <form className="form">
          <input type="text" className="form--input" placeholder="Top Text" />
          <input
            type="text"
            className="form--inputs"
            placeholder="Bottom text"
          />
          <button className="form--button" onClick={getMemeImage}>
            
            Get a new meme image
          </button>
        </form>
      </div>
      <img src={meme.randomImage} className="meme--image"/>
    </main>
  );
}
