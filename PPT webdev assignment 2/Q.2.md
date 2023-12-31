Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?
Answer-

CSS selectors are used to select the content you want to style. Selectors are the part of CSS rule set. CSS selectors select HTML elements according to its id, class, type, attribute etc.

There are several different types of selectors in CSS.

1.CSS Element Selector
2.CSS Id Selector
3.CSS Class Selector
4.CSS Universal Selector
5.CSS Group Selector

1. CSS Element Selector
The element selector selects the HTML element by name.

<!DOCTYPE html>  
<html>  
<head>  
<style>  
p{  
    text-align: center;  
    color: blue;  
}   
</style>  
</head>  
<body>  
<p>This style will be applied on every paragraph.</p>  
<p id="para1">Me too!</p>  
<p>And me!</p>  
</body>  
</html>  

2. CSS Id Selector
The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page so it is chosen to select a single, unique element.

It is written with the hash character (#), followed by the id of the element.

Let?s take an example with the id "para1".

<!DOCTYPE html>  
<html>  
<head>  
<style>  
#para1 {  
    text-align: center;  
    color: blue;  
}  
</style>  
</head>  
<body>  
<p id="para1">Hello Javatpoint.com</p>  
<p>This paragraph will not be affected.</p>  
</body>  
</html> 

3. CSS Class Selector
The class selector selects HTML elements with a specific class attribute. It is used with a period character . (full stop symbol) followed by the class name.

Note: A class name should not be started with a number.
Let's take an example with a class "center".

<!DOCTYPE html>  
<html>  
<head>  
<style>  
.center {  
    text-align: center;  
    color: blue;  
}  
</style>  
</head>  
<body>  
<h1 class="center">This heading is blue and center-aligned.</h1>  
<p class="center">This paragraph is blue and center-aligned.</p>   
</body>  
</html>  

4. CSS Universal Selector
The universal selector is used as a wildcard character. It selects all the elements on the pages.

<!DOCTYPE html>  
<html>  
<head>  
<style>  
* {  
   color: green;  
   font-size: 20px;  
}   
</style>  
</head>  
<body>  
<h2>This is heading</h2>  
<p>This style will be applied on every paragraph.</p>  
<p id="para1">Me too!</p>  
<p>And me!</p>  
</body>  
</html>

5. CSS Group Selector
The grouping selector is used to select all the elements with the same style definitions.

Grouping selector is used to minimize the code. Commas are used to separate each selector in grouping.

Let's see the CSS code without group selector.


h1 {  
    text-align: center;  
    color: blue;  
}  
h2 {  
    text-align: center;  
    color: blue;  
}  
p {  
    text-align: center;  
    color: blue;  
}  
As you can see, you need to define CSS properties for all the elements. It can be grouped in following ways:

h1,h2,p {  
    text-align: center;  
    color: blue;  
}  