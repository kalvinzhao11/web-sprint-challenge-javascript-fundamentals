// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/** 
the child function can access any variable from it's parent function and any global variable.  first the child check to see if the variable is in it's own function, if not then it checks to see if the variable is in it's
parent's function.  If so then it doesn't look further, and if not it checks to see if that variable is a global variable.  


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let summation = (number) => {
  let sum = 0
  let counter = 0
  while (counter <= number){
    sum += counter
    counter++
  }
  return sum
}
console.log(summation(4))