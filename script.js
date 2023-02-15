const size = 16;

function createCanvas(size) {
    let width = 320 / size; 
    for (i = 0; i < size * size; i++) {                 
        newPixel = document.createElement("div");   
        newPixel.classList.add("pixel");   
        newPixel.style.width = width + "px";        
        document.getElementById("canvas").appendChild(newPixel);        
        }    
    console.log(width);    
}

function fillIn() {
    this.classList.add("filled");
}

function pencilOn() {   
    const pixels = document.querySelectorAll("div.pixel");       
    pixels.forEach(pixel => pixel.addEventListener("mouseover", fillIn));
    canvas.addEventListener("mouseup", pencilOff);
}

function pencilOff() {
    const pixels = document.querySelectorAll("div.pixel");    
    pixels.forEach(pixel => pixel.removeEventListener("mouseover", fillIn));
}

function pencilClick() {
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach(pixel => pixel.addEventListener("mousedown", fillIn));
}

function clearCanvas() {
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach(pixel => pixel.classList.remove("filled"));
}

function resizeCanvas() {
    let size = prompt("Enter the number of tiles per side (max 100).");
    console.log(size);
    if (size > 0 && size < 101) {
        size = +size;
        clearCanvas();        
        canvas.replaceChildren();
        createCanvas(size);
    } else {
        alert("Enter a number between 0-100. Canvas has been reset to 16x16");
        clearCanvas();
        canvas.replaceChildren();
        createCanvas(16);
    }
}

document.addEventListener("DOMContentLoaded", function() { createCanvas(size); });
const canvas = document.getElementById("canvas");
canvas.addEventListener("mouseenter", pencilClick);
canvas.addEventListener("mousedown", pencilOn);
const clear = document.getElementById("clear");
clear.addEventListener("click", clearCanvas);
const resize = document.getElementById("resize");
resize.addEventListener("click", resizeCanvas);

