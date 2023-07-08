Q.8 How can you destructure objects and arrays in ES6?
Answer-

Destructuring in Arrays
To destructure an array in JavaScript, we use the square brackets [] to store the variable name which will be assigned to the name of the array storing the element.

const [var1, var2, ...] = arrayName;

The ellipses right after the var2 declared above simply means that we can create more variables depending on how many items we want to remove from the array.

Destructuring in Objects
When destructuring objects, we use curly braces with the exact name of what we have in the object. Unlike in arrays where we can use any variable name to unpack the element, objects allow just the use of the name of the stored data.

Interestingly, we can manipulate and assign a variable name to the data we want to get from the object. Let's see all of that now in code.

const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = freeCodeCamp;
console.log(frontend, backend);

// React, Node