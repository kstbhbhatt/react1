import React from 'react';
import Input from './Input';

function Form(props){
    function showMessage(e){
        if( e.target.closest('form').getAttribute('id') == 'signup-form'){
            alert('Sign Up Fucntionality will be enabled soon!');
        }else{
            alert('We are please that you are interested, will soon add this functionality!');
        }
        
        e.target.closest('form').previousSibling.previousSibling.click()
        // document.querySelector('.close-pop-up').click()
        e.preventDefault();
    }
    return(
        <div className='form-div' >
            <div onClick={props.close} id={props.id + "-close"} className="close-pop-up">X</div>
            <h2>{props.heading}</h2>
            <form action="" id={props.id} >
               {props.inputs.map((value, index)=>(<Input key={index} name={value.name} type={value.type}/>))}
               {props.textbox&&<textarea name="" id="" lines='3'></textarea>} 
                <input onClick={showMessage} type='submit' />
            </form>
        </div>
    )
}

export default Form;