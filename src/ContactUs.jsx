import React from "react";
import Form from "./Form";
import {contactUsForm} from "./formInfo";

function ContactUs(){
    const [openContactUs, ToggleContactUs] = React.useState(
        false
    )
    function close(){
        ToggleContactUs((prevValue)=>(!prevValue))
    }
    return(
        <div className="contact-us" style={!openContactUs?{display:'none'}:{display:'block'}}>
            
            <Form id="contact-form" heading="Contact Us for more Details" inputs={contactUsForm} textbox={true} close={()=>(close())}/>
        </div>
    )
}

export default ContactUs;