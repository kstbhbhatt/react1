import React from "react";

function Footer(){
    const date = new Date().getFullYear()
    function handleClick(e){
        document.querySelector('.close-pop-up').click()
        e.preventDefault()
    }
    return(
        <footer>
            <p> Kaustubh {date}</p>
            <p><a onClick={handleClick} href="#">Contact Us</a></p>
        </footer>
    )
}

export default Footer;