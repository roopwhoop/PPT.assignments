
const inputText = document.querySelector("input");
const button = document.querySelector("button");
const showText = document.querySelector(".show_input");

const showTextEventHandler = () => {
  showText.innerText = inputText.value;
};

button.addEventListener("click", showTextEventHandler);