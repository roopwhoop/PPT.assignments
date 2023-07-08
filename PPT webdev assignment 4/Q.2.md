Q.2 Explain Temporal Dead Zone?
Answer-

A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

A block is a pair of braces ({...}) used to group multiple statements.
Initialization occurs when you assign an initial value to a variable.
Suppose you attempt to access a variable before its complete initialization. In such a case, JavaScript will throw a ReferenceError.

So, to prevent JavaScript from throwing such an error, you’ve got to remember to access your variables from outside the temporal dead zone.