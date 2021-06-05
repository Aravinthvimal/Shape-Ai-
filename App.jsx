import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note_1 from "./Note_1";
import Note_2 from "./Note_2";
import Note_3 from "./Note_3";

function App() {
    return(
        <div>
            <Header />
            <Footer />
        <div id="notes">
            <Note_1 />
            <Note_2 />
            <Note_3 />
        </div>
        </div>
    ); 
}

export default App;

