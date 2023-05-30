import React from "react";


function Header(){
    const [ham, toggleHam] = React.useState(false)
    function toggleNav(){
        toggleHam((prevValue)=>(!prevValue))
    }

    return(
        <header>
            <nav>
                <h3>Samsung Galaxy S23</h3>
                <button onClick={toggleNav} className ={ham ?"hamburg show d-none": "hamburg d-none"}><div className="hamburger"></div></button>
                <div style={ham?({top:"70px"}):({top:"-500px"})} className="lists">
                <ul className="navbar-list">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#colors">Colors</a></li>
                    <li><a href="#">Specs</a></li>
                </ul>
                <ul className="navbar-signup">
                    <li><a href="#features">Sign Up</a></li>
                    <li><a href="#colors">Contact Us</a></li>
                </ul>
                </div>
                
            </nav>
        </header>
    )

}

export default Header;


