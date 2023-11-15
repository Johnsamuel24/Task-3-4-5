

// Decalring an integer array

let a =[1,2,3,4,5,6,7,8,9,10];


console.log("\nGiven Array :");
console.log(a);


// Arrow function to find the sum of all numbers in an array

let e3 = () => {

console.log("\nArrow Function\n");
let z =0;
for(let i=0;i<a.length;i++)
{

z=z+a[i];


}
console.log("Sum of All Number in the Given string :",z);

}

// Calling the arrow function

e3(a);

