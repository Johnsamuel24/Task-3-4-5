

let b = '{"firstName":"Rack","lastName":"Jackon","gender":"male","age":24,"streetAddress":"126","city":"San Jone","state":"CA","postalCode":"394221","type":"home","number":"7383627627"}'


let a = JSON.parse(b);



// Iterating the given JSON using for in loop

      console.log("Using For in Loop :")
      console.log("\n")

        for(let key in a)
        {
          console.log(key,":",a[key]);
          
        }
      


        
// Iterating the given JSON using for of loop
        
        console.log("\n")
        
        console.log("Using For of Loop :")
        console.log("\n")

      for(let [key,value] of Object.entries(a))
      {
        console.log(key,":",value);
      }
    



// Iterating the given JSON using forEach loop

    console.log("\n")
  
    console.log("Using ForEach Loop :")
    console.log("\n")
  
    Object.entries(a).forEach( (key) =>
    {
    console.log(key.toString().replace(","," : "));
    });
    
  

// Iterating the given JSON using for loop


    console.log("\n");
  
    console.log("Using For  Loop :")
  
    console.log("\n");
  
    let w=Object.keys(a);
  let x=Object.values(a);
  
    for(let i =0;i<Object.keys(a).length;i++)
  
    {
  
      console.log(w[i],":",x[i]);
  
  
    }
   



