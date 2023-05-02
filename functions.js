"use strict";
// function add (a:number,b:number) : number {
//     return a+b
// }
// optional params , required params , rest params  
// Option
// function add (a:number,b:number,c?:number) : number {
//     return c? a+b+c : a+b  
// }
// required
// function add (a:number,b:number,c=10) : number {
//     return c? a+b+c : a+b  
// }
// rest 
// function add (a:number,b:number,...c:number[]) : number {
//     return a + b +  c.reduce((a:number , b:number)=> {return a + b})
// }
// let numbers = [5,2]
// console.log(add(2,3,...numbers))
// genric functions 
function getItems(items) {
    return new Array().concat(items);
}
let concatnum = getItems([1, 2, 3, 4]);
let concatstring = getItems(['a', 'b', 'c']);
// next is classes 
