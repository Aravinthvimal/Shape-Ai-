import React from "react";
import image from "./image2.jpeg";

function Note_2() {   
    return(
        <div className="note">
            <img src= {image} alt="Bootcamp"></img>
            <h1> Bootstrap Web Dev Bootcamp </h1>
            <p> This was an Interesting bootcamp. It gave a good Introduction and overview about Web Development 
                using Bootstrap. The sessions were handled and made it fun and enjoyable by Shauriya Sir.</p>
        </div>
    );
}

export default Note_2;
