
// Declaring an Array

let a= ["111","racecar","8954","happy","1000","madam"];

console.log("\nGiven Array :");
console.log(a);

// IIFE Function to find the palindromes in an array

(function(){

    let y;

    console.log("\nIIFE Function\n")
    console.log("Palindromes in the given array :\n")


for(let i=0;i<a.length;i++)
{
y =a[i].split("").reverse().join("");

if(a[i] == y)
{
    console.log(a[i]+"\n");
}

}

}
)();


// Anonymous function to find the palindromes in an array

let e5 = function(){

    let y;

    console.log("\nAnonymous Function\n")
    console.log("Palindromes in the given array :\n")


for(let i=0;i<a.length;i++)
{
y =a[i].split("").reverse().join("");

if(a[i] == y)
{
    console.log(a[i]+"\n");
}

}

}

e5(a);








