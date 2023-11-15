

// Declaring Array Variables

let a =[1,2,3,4,5];

let b = [6,7,8,9,10];

// Concating two array using array methods

let c = a.concat(b);

let i;
console.log("\nThe Given Arrays are :\n");
console.log(a);
console.log("\n");
console.log(b);



// IIFE function to find the median of two sorted arrays of the same size

(function(){


    let w=c.length / 2;

i= (c[w]+c[w-1])/2;
console.log("\nIIFE Function\n");
console.log("The Median of the Given Two Arrays are : ",i);
})();



// Anonymous function to find the median of two sorted arrays of the same size

let e6 = function(){


    let w=c.length / 2;

i= (c[w]+c[w-1])/2;
console.log("\nAnonymous Function\n");
console.log("The Median of the Given Two Arrays are : ",i);
}

e6(c);
