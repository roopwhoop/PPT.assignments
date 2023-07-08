Q.6 What are Promises & Explain Some Three Methods of Promise
Answer-
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.


1.Promise.prototype.catch()
The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. It is a shortcut for Promise.prototype.then(undefined, onRejected).

2.Promise.prototype.finally()
The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

This lets you avoid duplicating code in both the promise's then() and catch() handlers.

3.Promise.prototype.then()
The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

