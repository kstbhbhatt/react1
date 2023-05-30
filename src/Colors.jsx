import React from "react";

function Colors(){
    const[colorS23, changeColorS23] = React.useState({
        url:"green",
        name:"Green"
    })
    function showPics(e){
        let name = e.target.getAttribute('data-name')
        let url = e.target.getAttribute('data-url')
        changeColorS23({
            url:url,
            name:name
        })
        console.log(colorS23)
    }
    
    return(
        <div  id="colors" className="colors">
            <h2>Color Options</h2>
            <div className="color">
            <div className="color-block lt">
                <img src={`https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-${colorS23.url}-side.jpg`} />
                <h3>{colorS23.name}</h3>
                <div className="colorname">
                    <div data-name= "Green" data-url="green" value="green" onClick={showPics} className="green  color-circles"></div>
                    <div data-name= "Phantom Black" data-url="phantom-black" onClick={showPics} className="phantomblack color-circles"></div>
                    <div data-name= "Lavender" data-url="lavender" onClick={showPics} className="lavender color-circles"></div>
                    <div data-name= "Cream" data-url="cream" onClick={showPics} className="white color-circles"></div>
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