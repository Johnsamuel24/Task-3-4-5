

// Declaring an array 

let a= ["111","racecar","8954","happy","1000","madam"];

console.log("\nGiven Array :");
console.log(a);


// Arrow Function to Return all the palindromes in an array


let e5 = function(){

    let y;

    console.log("\nArrow Function\n")
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


// Calling the Arrow function

e5(a);








