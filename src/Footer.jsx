import React from "react";

function Footer(){
    const date = new Date().getFullYear()
    return(
        <footer>
            <p> Kaustubh {date}</p>
            <p><a href="#">Contact Us</a></p>
        </footer>
    )
}

export default Footer;