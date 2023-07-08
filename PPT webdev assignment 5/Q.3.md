Q.3 Explain SetTimeOut and setInterval ?
Answer-

JavaScript setInterval() method
The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval. It evaluates an expression or calls a function at given intervals. This method continues the calling of function until the window is closed or the clearInterval() method is called. This method returns a numeric value or a non-zero number that identifies the created timer.

Unlike the setTimeout() method, the setInterval() method invokes the function multiple times. This method can be written with or without the window prefix.

The commonly used syntax of setInterval() method is given below:

Syntax
window.setInterval(function, milliseconds);  

JavaScript setTimeout() method
The setTimeout() method in JavaScript is used to execute a function after waiting for the specified time interval. This method returns a numeric value that represents the ID value of the timer.

Unlike the setInterval() method, the setTimeout() method executes the function only once. This method can be written with or without the window prefix.

We can use the clearTimeout() method to stop the timeout or to prevent the execution of the function specified in the setTimeout() method. The value returned by the setTimeout() method can be used as the argument of the clearTimeout() method to cancel the timer.

Syntax
window.setTimeout(function, milliseconds); 