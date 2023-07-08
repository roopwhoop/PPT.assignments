Q.7 What’s async & await Keyword in JavaScript
Answer-

JavaScript Async/Await
JavaScript is always synchronous and single-threaded that provides the event loops. The event loops enable us to queue up an activity. This activity will not happen until the loops become available after the program that queued the action has completed the execution. However, our program contains a large number of functionalities, which causes our code to be asynchronous. The Async/Await functionality is one of them. Async/Await is an extension of promises that we get as language support.

In this article, we are going to discuss the JavaScript Async/Await with some examples.

JavaScript Async
An async function is a function that is declared with the async keyword and allows the await keyword inside it. The async and await keywords allow asynchronous, promise-based behavior to be written more easily and avoid configured promise chains. The async keyword may be used with any of the methods for creating a function.
Syntax:
The syntax of JavaScript may be defined as:

Async function myfirstfunction() {  
return "Hello World"  
}  
It is the same as:

async function myfirstfunction() {  
return Promise.resolve("Hello World");  
}  

JavaScript Await
JavaScript Await function is used to wait for the promise. It could only be used inside the async block. It instructs the code to wait until the promise returns a response. It only delays the async block. Await is a simple command that instructs JavaScript to wait for an asynchronous action to complete before continuing with the feature. It's similar to a "pause until done" keyword. The await keyword is used to retrieve a value from a function where we will usually be used the then() function. Instead of calling after the asynchronous function, we'd use await to allocate a variable to the result and then use the result in the code as we will in the synchronous code.

Syntax:
The syntax of JavaScript Await function may be defined as:

// Await function works only inside the async function  
let value = await promise;  