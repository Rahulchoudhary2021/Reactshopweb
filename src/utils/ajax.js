import {CONFIG } from './constants';
export function fatchProducts(fn){
 var xmlhttpRequest=new window.XMLHttpRequest();

xmlhttpRequest.onreadystatechange=function(){
if(xmlhttpRequest.readyState==4 &&
xmlhttpRequest.status==200){
// console.log("Data Is",xmlhttpRequest.responseText);
   fn(xmlhttpRequest.responseText);
}}

xmlhttpRequest.open('GET',CONFIG.URL,'true');

xmlhttpRequest.send(null);
}