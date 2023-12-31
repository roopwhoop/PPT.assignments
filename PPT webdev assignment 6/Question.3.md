Q.3 What’s Call Apply Bind Method & Difference Between them
Answer-
In JavaScript, the call(), apply(), and bind() methods are used to explicitly set the value of this in a function. They provide more control over how a function is executed and allow you to specify the context in which the function should be invoked. Here's an explanation of each method and the differences between them:

1.call(): The call() method is used to invoke a function with a specified this value and individual arguments passed in as separate parameters. The first argument of call() sets the value of this, and subsequent arguments are passed as arguments to the function. Here's an example:
javascript

function sayHello() {
  console.log("Hello, " + this.name);
}

var person = {
  name: "John"
};

sayHello.call(person); // Output: Hello, John
In the example above, call() is used to invoke the sayHello() function with person as the value of this.

2.apply(): The apply() method is similar to call(), but it accepts the arguments to be passed to the function as an array or an array-like object. The first argument of apply() sets the value of this, and the second argument is an array or array-like object containing the arguments to be passed to the function. Here's an example:

javascript

function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}

var person = {
  name: "John"
};

sayHello.apply(person, ["Hello"]); // Output: Hello, John
In this example, apply() is used to invoke the sayHello() function with person as the value of this and ["Hello"] as the arguments.

3.bind(): The bind() method is used to create a new function that, when called, has a specified this value and any initial arguments provided. Unlike call() and apply(), bind() does not immediately invoke the function but returns a new function with the bound this value. Here's an example:

javascript

function sayHello() {
  console.log("Hello, " + this.name);
}

var person = {
  name: "John"
};

var sayHelloToPerson = sayHello.bind(person);

sayHelloToPerson(); // Output: Hello, John
In this example, bind() is used to create a new function sayHelloToPerson with person as the value of this. When sayHelloToPerson() is called, it logs "Hello, John" to the console.

The main difference between call() and apply() is how the arguments are passed to the function. call() accepts individual arguments, while apply() accepts an array or array-like object. bind(), on the other hand, returns a new function with the bound this value, without immediately invoking the original function.

These methods are useful when you want to explicitly set the value of this in a function or create a new function with a specific context. They provide flexibility and control over the execution of functions in JavaScript.
