Q.4 how can you handle Async code in JavaScript ?
Answer-

Asynchronous JavaScript simply implies the fact that the user will receive the data in a faster manner.
This generally took place whenever the user tries to fetch the data from the API (Application Programming Interface) resource or tries to collect the response from the API itself.
To handle the asynchronous data, we use promises or callbacks which helps users easily fetch responses or data from the API with ease.
After understanding the basics of Call Stack, some more technical concepts exist like Event Loop, Web API, and Message Queue.
All these are not associated with the JavaScript engine, they are actually related to Browser’s JavaScript runtime environment.
Whenever any synchronous method or DOM events (like setTimeout or promises or callbacks) comes into the existence, it gets executed into the Web API’s and after its timer gets completed it is pushed into the message queue from where the event loop further pushes that message into the Call Stack for its execution.
The task which Event Loop executes is basically determining whether or not the stack is empty. If it is empty then that particular event loop takes data from the message queue to Call Stack for execution.