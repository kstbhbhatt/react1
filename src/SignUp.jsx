import React from 'react';
import Form from "./Form";
import {SignUoForm} from "./formInfo";

function SignUp(){
    const [openSignUp, ToggleSignUp] = React.useState(
        false
    )
    function closeSignUp(){
        ToggleSignUp((prevValue)=>(!prevValue))
    }
    return(
        <div className="sign-up" style={!openSignUp?{display:'none'}:{display:'block'}}>
            
            <Form id="signup-form" heading="Sign Up for latest News" inputs={SignUoForm} textbox={false} close={()=>(closeSignUp())}/>
        </div>
    )
}

export default SignUp;