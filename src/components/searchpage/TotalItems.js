import React, { useState } from 'react'
import '../../App.css';
import commonContext from '../../utils/context';
export const Totalitems=(props)=>{
    
    const style = {
        'text-align': 'right',

      };


    return ( 
        <>
   
<commonContext.Consumer>
    {
        (shareObject)=>{
            return(
                <p class="h2" style={style}> <span class="glyphicon glyphicon-shopping-cart" >Total Item In Cart:{shareObject.total}</span></p> 
            )
        }
    }
</commonContext.Consumer>

        </>
    )
}

