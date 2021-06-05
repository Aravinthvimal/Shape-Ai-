import React from "react";
import image from "./image1.jpeg";

function Note_1() {
    return(
        <div className="note">
            <img src= {image} alt="Bootcamp"></img>
            <h1> Javascript Web Dev Bootcamp </h1>
            <p> This was an Amazing bootcamp. It gave a good Introduction and overview about Web Development 
                using Javascript. The sessions were handled and made it fun and enjoyable by Shauriya Sir. </p>
        </div>
    );
}

export default Note_1;