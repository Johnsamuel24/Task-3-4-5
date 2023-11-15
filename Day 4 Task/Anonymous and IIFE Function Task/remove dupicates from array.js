

// Declaring an Array

let a= [1,1,2,1,2,"happy","madam","happy"];



console.log("\nOriginal Array :",a);
let b=[];

// IIFE function to Remove duplicates from an array

(function(){
    

    for(let i=0;i<a.length;i++)
    {
        let j=1;
        for( j=i+j;j<a.length;j++)
        {
            if(a[i]==a[j])
            {
                delete a[j];
            }
        }
    }
    
    b=a.filter(item =>{return item;} );
    console.log("\nIIFE Function\n")
   
    console.log("Duplicates removed :",b);
    })();



// Anonymous function to Remove duplicates from an array

let e7 = function(){


for(let i=0;i<a.length;i++)
{
    let j=1;
    for( j=i+j;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            delete a[j];
        }
    }
}

b=a.filter(item =>{return item;} );

console.log("\nAnonymous Function\n");
    
    console.log("Duplicates removed :",b);
}

e7(a);


