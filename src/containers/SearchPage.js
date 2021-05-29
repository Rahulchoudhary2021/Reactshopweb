import React, { Component } from 'react';
import { Norecordfound } from '../components/searchpage/NoRecordFound';
import { SearchInput } from '../components/searchpage/SearchInput';
import { SearchList } from '../components/searchpage/SearchList';
import { Totalitems } from '../components/searchpage/TotalItems';
import { fatchProducts } from '../utils/ajax';

export  class SearchPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={products:[]}
        console.log("1.constructor invoke");
    }
static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
        
    }
    
    
  UNSAFE_componentWillMount(){
        console.log("2.Will Mount Call"); 
    }

    render(){
        console.log("3.render");
        return(
            <div>
    <SearchInput/>
         <Totalitems/>
       
       
       
        <br/>
       
      

 
          
     {this.state.products==0?<Norecordfound/>:
        <SearchList products={this.state.products}/>} 

        </div>

        );
     }
   dataCallBack(responseData){
   console.log("Response data is",responseData);
   let object=JSON.parse(responseData);
   console.log(typeof responseData);
   console.log("Object is",object.mobiles);

   setTimeout(()=>
   this.setState({products:object.mobiles}),
   3000
   );
 }
    
      componentDidMount(){
          fatchProducts( this.dataCallBack.bind(this));
    
        console.log("4.Did Mount Call")
    }
    componentDidUpdate(){
        console.log("CHange Happen");
    }
    componentWillUnmount(){
        // clean code
        // make object null
    }
    // shouldComponentUpdate(nextProps,nextState){
    //    if(this.props.x != nextProps.x){
    //     return true;
    // }
    // return false;
    // }
    }
    

