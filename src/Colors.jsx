import React from "react";

function Colors(){
    const[colorS23, changeColorS23] = React.useState({
        url:"green",
        name:"Green"
    })
    function showGreen(){
        changeColorS23({
            url:"green",
            name:"Green"
        })
        console.log(colorS23)
    }
    function showPhantomBlack(){
        changeColorS23({
            url:"phantom-black",
            name:"Phantom Black"
        })
        console.log(colorS23)
    }
    function showLavender(){
        changeColorS23({
            url:"lavender",
            name:"Lavender"
        })
        console.log(colorS23)
    }
    function showWhite(){
        changeColorS23({
            url:"cream",
            name:"White"
        })
        console.log(colorS23)
    }
    return(
        <div className="colors">
            <h2>Color Options</h2>
            <div className="color">
            <div className="color-block lt">
                <img src={`https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-${colorS23.url}-side.jpg`} />
                <h3>{colorS23.name}</h3>
                <div className="colorname">
                    <div onClick={showGreen} className="green  color-circles"></div>
                    <div onClick={showPhantomBlack} className="phantomblack color-circles"></div>
                    <div onClick={showLavender} className="lavender color-circles"></div>
                    <div onClick={showWhite} className="white color-circles"></div>
                </div>
                <a href="https://www.samsung.com/in/smartphones/galaxy-s23-ultra/buy" target="_blank">Buy Now</a>
            </div>
            <div className="color-block rt">
                <div className="colorimages">
                    <div>
                        <img src={`https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-${colorS23.url}-back.jpg`} />
                    </div>
                </div >
            </div>
            
            


        </div>
    </div>

       

    )
}

export default Colors