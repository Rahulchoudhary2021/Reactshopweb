import React from 'react'
import { Addtocart } from './AddToCart'

export const Item=(props) =>{
    const myStyle={
        width:'150px',
        height:'150px'
    }

    

    return (

      <>
        <div > <h1  class="card-body" class='h2' >{props.product.name} </h1> <p class='h3' class="price"><a href="#" class="text-warning">${props.product.price}</a></p>
            <img style={myStyle} class="rounded mx-auto d-block"  src={props.product.url}/>
            <Addtocart/>
            </div>
         </>
    )
}
