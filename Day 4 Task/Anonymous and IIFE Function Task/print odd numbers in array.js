

// Declaring a Number array

let a =[1,2,3,4,5,6,7,8,9,10];


console.log("\nGiven Array :",a);



// IIFE function to Print odd numbers in an array

(function( )
{
    console.log("\nIIFE Function\n");
    console.log("Odd numbers\n");
    for(let i=0;i<a.length;i++)
    {
    if(a[i]%2 !== 0)
    {
        console.log(a[i]+" ");
    }
    }
    console.log("\n");
})();







// Anonymous function to Print odd numbers in an array


let e1 = function( )
{
    console.log("Anonymous Function\n");
    console.log("Odd numbers\n");
    for(let i=0;i<a.length;i++)
    {
        
    if(a[i]%2 !== 0)
    {
        console.log(a[i]+" ");
    }
    }
    
}

e1(a);













