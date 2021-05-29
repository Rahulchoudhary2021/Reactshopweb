import React, { useState } from 'react'
import commonContext from '../../utils/context';

export const Addtocart=(props)=> {
    const [cartValue,setCart]= useState(false);
  const  toggleCart=()=>{
        setCart(!cartValue)
        
    }

    return (
        <>

         <div class="d-grid gap-2 d-md-flex justify-content-md-end">

 <commonContext.Consumer>
     {
         (shareObject)=>{
             return(
                <button class="btn btn-success" type="button" onClick={()=>{
                    toggleCart();
                    shareObject.updateTotal(!cartValue?1:-1);
                }}>{cartValue?'Remove From Cart':'ADD TO CART'}
                </button>                
             )

         }
     }
 </commonContext.Consumer>



 
 
</div>
        </>
    )
}
