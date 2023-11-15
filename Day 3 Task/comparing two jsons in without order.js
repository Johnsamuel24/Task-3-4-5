


// Declaring Objects and its values

var obj1={name:"Person 1",age:5}

var obj2={age:5,name:"Person 1"}



//  Using if condition to compare the length and the values of the Objects

if(Object.keys(obj1).length == Object.keys(obj2).length)
{

  // Iterating through the for in loop to check the keys and the values of the given Objects are Same

   for(var key in obj1)
{
  if(obj2.hasOwnProperty(key) && obj1[key] == obj2[key] )
  {

  }

  // If the Given Objects are not same the else part will be executed

else{
  console.log("obj1 and obj2 are not same");
  process.exit(0);
}

}


 // If the Given Objects are same the console log will be executed

console.log("obj1 and obj2 are same");
}


 // If the Given Objects are not same in length this else part will be executed

else
{
  console.log("obj1 and obj2 are not same");
}





                                                          