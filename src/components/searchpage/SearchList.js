import React from 'react'
import { fatchProducts } from '../../utils/ajax'
import { Item } from './Item'

export const  SearchList=(props)=> {
    

    return (
        <>
     
            {props.products.map((product,index)=><Item key={product.id} product={product}/>)}
        </>
    )
}
