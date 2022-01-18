import React  from 'react';
import Card from "./components/Footer";
import "./style.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App(){
    return(
        <div>       
            <Navbar />
            <Header />
            <Card />
        </div>
    )
}

export default App
