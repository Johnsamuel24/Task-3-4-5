

// Declaring an integer array

let a =[1,2,3,4,5,6,7,8,9,10];

console.log("\nGiven Array :",a);


// Arrow function to print the odd numbers in an array

let e1 =  () =>
{
    console.log("\nArrow Function\n");
    console.log("\nOdd numbers\n");
    for(let i=0;i<a.length;i++)
    {
        
    if(a[i]%2 !== 0)
    {
        console.log(a[i]+" ");
    }
    }
    
}


// Calling the arroe function

e1(a);













