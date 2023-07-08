Q.5 What are Callbacks &  Callback Hell ?
Answer-

Callback: A callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced. Callbacks are an important part of asynchronous JavaScript.

Example: This example shows a callback in Javascript.

// Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}
 
// Add function
const add = (array) => {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
}
 
// Calling main function
mainFunction(add);

Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 

Example: In the below example we have split the word GeeksForGeeks into three separate words and are trying to animate each word after one after another.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
 
    <title>Callback Hell</title>
     
    <style>
        * {
            padding: none;
            margin: none;
            box-sizing: border-box;
        }
 
        .word {
            color: #308d46;
            font-size: 4rem;
            transition: all .5s ease-in;
            margin: 0 5px;
            transform: translateY(3.8rem);
            opacity: 0;
        }
 
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 95vw;
            height: 95vh;
        }
 
        .container {
            overflow: hidden;
            display: flex;
            flex-direction: row;
        }
 
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
 
<body>
    <div class="container">
        <h2 class="word">Geeks</h2>
        <h2 class="word">For</h2>
        <h2 class="word">Geeks</h2>
    </div>
</body>
<script>
    let words = document.querySelectorAll(".word");
 
    const animateAll = (animate) => {
        setTimeout(() => {
            animate(words[0]);
            setTimeout(() => {
                animate(words[1]);
                setTimeout(() => {
                    animate(words[2]);
                }, 1000)
            }, 1000)
        }, 1000)
    }
 
    const animate = (word) => {
        word.classList.add("animate");
    }
 
    animateAll(animate);
</script>
</html>