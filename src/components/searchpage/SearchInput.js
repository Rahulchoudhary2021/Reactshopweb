import React from 'react';

export const SearchInput=React.memo((props)=>{
    return(
        <div className='input-group'>
              <h1 class='header'>DiscountFilters.com</h1>
       
         
            <input className='form-control' type='text' placeholder="Type to Search"/>
            <button className='btn btn-primary'>Search</button>
        </div>
    

    )  
});