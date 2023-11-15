

// Declaring two arrays

let a=[1,1000,545454,879878,"happy","madam"];
let b=[1,1000,545454,879878,"happy","madam"];


let k = 3;

console.log("\nGiven Array\n");
console.log(a);
console.log("\nRotating the given array left side by "+k+" times");



// IIFE function to rotate the given array

(function(){

    console.log("\nIIFE Function\n");
    console.log("Rotating the Given Array:\n");
    
    for(let i=0;i<k;i++)
    {
b.push(b.shift());

    // let z = a.reverse();
    
    }
    console.log(b);
    }
    )();


    
// Anonymous function to rotate the given array


let e8= function(){

console.log("\nAnonymous Function\n");
console.log("Rotating the Given Array:\n");

for(let i=0;i<k;i++)
{
a.push(a.shift());

}

console.log(a);
}


e8(a);



