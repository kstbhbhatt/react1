import React from 'react';

function Input(prop){


    return(
        <input onChange={validate} name={prop.name} type={prop.type} placeholder={prop.name} />
    )
}
export default Input 