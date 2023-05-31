import React from "react";


function Header(){
    const [ham, toggleHam] = React.useState(false)
    function toggleNav(){
        setTimeout( toggleHam((prevValue)=>(!prevValue)), 500)
       
    }
    function openContactUs(e){
        document.querySelector('#contact-form-close').click()
        toggleHam((prevValue)=>(!prevValue))
        e.preventDefault()

    }
    function openSignUp(e){
        document.querySelector('#signup-form-close').click()
        toggleHam((prevValue)=>(!prevValue))
        e.preventDefault()

    }

    return(
        <header>
            <nav>
                <h3>Samsung Galaxy S23</h3>
                <button onClick={toggleNav} className ={ham ?"hamburg show d-none": "hamburg d-none"}><div className="hamburger"></div></button>
                <div style={ham?({top:"70px"}):({top:"-500px"})} className="lists">
                <ul className="navbar-list">
                    <li><a onClick={toggleNav} href="#features">Features</a></li>
                    <li><a onClick={toggleNav} href="#colors">Colors</a></li>
                    <li><a onClick={toggleNav} href="#specs">Specs</a></li>
                </ul>
                <ul className="navbar-signup">
                    <li><a onClick={openSignUp} href="#">Sign Up</a></li>
                    <li><a onClick={openContactUs}href="#">Contact Us</a></li>
                </ul>
                </div>
                
            </nav>
        </header>
    )

}

export default Header;


