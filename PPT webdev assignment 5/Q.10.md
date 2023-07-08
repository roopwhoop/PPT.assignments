Q.10 How do you define an asynchronous function in JavaScript using async/await?
Answer-

We all know that JavaScript is Synchronous in nature which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing.

But there are a lot of functionalities in our program which make our code Asynchronous and one of them is the Async/Await functionality. Async/Await is the extension of promises which we get as support in the language. 

You can refer to Promises in Javascript to know more about it. 

The following sections will describe more about async and await in detail along with some examples (individual as well as combined examples of async-await):

Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

Example 1: In this example, we will see the basic use of async in Javascript.

javascript

    const getData = async() => {
    let data = "Hello World";
    return data;
    }
     
    getData().then(data => console.log(data));
Output:

Hello World
Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

Example 2: This example shows the basic use of the await keyword in Javascript.

javascript

    const getData = async() => {
        let y = await "Hello World";
        console.log(y);
    }
     
    console.log(1);
    getData();
    console.log(2);