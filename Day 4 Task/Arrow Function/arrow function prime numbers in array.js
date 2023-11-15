

// Declaring a integer array


    let a =[2,3,5,27,6,19,11,100,111,1051,5479,5483,1000,7919];
    
    console.log("\nGiven Array :");
console.log(a);

 

// Arrow function to Return all the prime numbers in an array


    let e4 = function(){
    
    
    console.log("\nArrow Function\n");
    console.log("Prime Numbers in the given Array\n");
    for(let i=0;i<a.length;i++)
    {

    if(a[i] >3 )
    {
        let y=0;
    for(let w =2;w<a[i];w++)
    {

y++;
    if(a[i]%w === 0)
    {
        break;
    }
    if(a[i]-2 === y)
{console.log(a[i]+"\n");
break;}

    }
    

    }
    if(a[i]===2 || a[i]===3)
    {
        console.log(a[i]+"\n");
    }

    }
    
    
    }


    // Calling the arrow function

    
    e4(a);


