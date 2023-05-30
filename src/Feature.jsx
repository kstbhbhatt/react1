import React from "react";
import Card from "./Card";
import card from "./features";


 function Feature(){
    return(
        <div id="features" className="features">
            <h2>Features</h2>
            <div className="cards">
                {card.map((value)=>(<Card key={value.id} url={value.url} title={value.title} descp={value.descrp} />))}
            </div>
            
        </div>
    )
 }
 export default Feature;