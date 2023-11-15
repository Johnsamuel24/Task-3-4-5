



let a =[1,2,3,4,5,6,7,8,9,10];

console.log("\nGiven Array :");
console.log(a);

// IIFE function to find the Sum of all numbers in an array

(function(){

    console.log("\nIIFE Function\n");
    let z =0;
    for(let i=0;i<a.length;i++)
    {
    
    z=z+a[i];
    
    
    }
    console.log("Sum of All Number in the Given string :",z+"\n");
    
    })();


    
// Anonymous function to find the Sum of all numbers in an array

let e3 = function(){

console.log("\nAnonymous Function\n");
let z =0;
for(let i=0;i<a.length;i++)
{

z=z+a[i];


}
console.log("Sum of All Number in the Given string :",z);

}
e3(a);

