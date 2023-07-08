Q.5 What is the difference between let and const ?
Answer-

let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.

let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:

   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .

let can be updated but not re-declared.
Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

    let greeting = "say Hi";
    greeting = "say Hello instead";
this will return an error:

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
However, if the same variable is defined in different scopes, there will be no error:

    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"
Why is there no error? This is because both instances are treated as different variables since they have different scopes.

This fact makes let a better choice than var. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.

Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not happen.

Hoisting of let
Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

Const
Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.

const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

    const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 
nor this:

    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
Every const declaration, therefore, must be initialized at the time of declaration.

This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

    const greeting = {
        message: "say Hi",
        times: 4
    }
while we cannot do this:

    greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.