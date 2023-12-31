Q.9 Explain Class in JavaScript?
Answer-

In JavaScript, a class is a blueprint or a template for creating objects that share the same structure and behavior. It serves as a constructor function and provides a way to define and create multiple instances of objects with similar characteristics. Classes were introduced in ECMAScript 2015 (ES6) to provide syntactic sugar and a more familiar syntax for working with objects in an object-oriented manner.

Here's an example of defining a class in JavaScript:

javascript

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

In the example above, the Person class is defined with a constructor and a sayHello method. The constructor is a special method that is automatically called when a new instance of the class is created. It initializes the object's properties (name and age) based on the arguments passed to the constructor.

The sayHello method is defined within the class and can be called on instances of the Person class. It logs a greeting message to the console, using the name property of the object.

To create an instance of the class, you can use the new keyword:

javascript

const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

In this case, person1 and person2 are two separate instances (objects) created from the Person class, with their own unique name and age properties. You can call the sayHello method on each instance to invoke the behavior defined within the class.

It's important to note that under the hood, JavaScript classes are primarily syntactic sugar over the existing prototype-based inheritance model in JavaScript. The class syntax makes it easier and more intuitive to define and work with objects in an object-oriented manner.

JavaScript classes also support inheritance, where one class can inherit properties and methods from another class using the extends keyword. This enables the creation of class hierarchies and promotes code reuse through the concept of subclassing and superclassing.

javascript

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayGrade() {
    console.log(`I am in grade ${this.grade}.`);
  }
}

In this example, the Student class extends the Person class, inheriting its properties and methods. The super keyword is used within the Student class's constructor to call the parent class's constructor and initialize the inherited properties. The displayGrade method is specific to the Student class.

JavaScript classes provide a cleaner syntax and a more familiar object-oriented programming approach for defining and working with objects. They support encapsulation, constructor initialization, method definitions, and inheritance, making it easier to structure and maintain complex code.