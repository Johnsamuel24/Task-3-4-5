

// Declaring string array

let b =["Good bye","string","race car","it is raining today"];




// Arrow Function to Convert all the strings to title caps in a string array

let e2= () => {


    console.log("\nArrow function \n");
    
    console.log("Original String \n");
    for(let i=0;i<b.length;i++)
    {
        
    console.log(b[i]);
    }
    console.log("\nTitle Caps \n");

for(let i=0;i<b.length;i++)
{
let z=b[i].toLowerCase().split(" ");



    for( let r = 0; r<z.length ; r++ )

    {
        
        
        z[r]=z[r].charAt(0).toUpperCase()+z[r].slice(1);
        
    }
    
    let p=z.join(" ");
    
    console.log(p);
    
    

}
}

// Calling Arrow Function

e2(b);
