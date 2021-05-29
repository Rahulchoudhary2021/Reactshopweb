import React, { useState } from 'react';
import './App.css';
import {SearchPage} from './containers/SearchPage';
import commonContext from './utils/context';
let total=0;


const App=(props)=>{

const[plus,setplus] = useState(0);
const updateTotal=(val)=>{
console.log("Value ",val);
total +=val;
shareObject={ ...shareObject,total:total};
console.log("Total Item In Cart",shareObject)
setplus(plus+1);
}
let shareObject={total:total,updateTotal:updateTotal}

  
  return(
    <div className='container'>
   <commonContext.Provider  value={shareObject}>
   <SearchPage />
   </commonContext.Provider>
      

    </div>

  );

}
export default App;