const box = document.querySelector(".box");

const eventHandler = () => {
    box.style.backgroundColor= "yellow";
    box.style.height = "600px";
    box.style.width = "600px";

};

box.addEventListener("click", eventHandler);
