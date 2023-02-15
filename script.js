// Set initial 16x16 size for canvas
let size = 16;

// Create initial canvas
document.addEventListener("DOMContentLoaded", function() { createCanvas(size); });

function createCanvas(size) {
    let width = 320 / size; 
    for (i = 0; i < size * size; i++) {                 
        newPixel = document.createElement("div");   
        newPixel.classList.add("pixel");   
        newPixel.style.width = width + "px";        
        document.getElementById("canvas").appendChild(newPixel);        
        }        
}

// Listen for mouse on canvas
const canvas = document.getElementById("canvas");
canvas.addEventListener("mouseenter", pencilClick);
canvas.addEventListener("mousedown", pencilOn);

// Fill pixels when clicked or moused over
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

// Clear canvas button functionality
const clear = document.getElementById("clear");
clear.addEventListener("click", clearCanvas);

function clearCanvas() {
    const pixels = document.querySelectorAll("div.pixel");
    pixels.forEach(pixel => pixel.classList.remove("filled"));
}

// Resize canvas button functionality
const resize = document.getElementById("resize");
resize.addEventListener("click", getNewSize);

function getNewSize() {
    let newSize = prompt("Enter the number of tiles per side (max 100).");    
    if (newSize > 0 && newSize < 101) {        
        resizeCanvas(newSize);
    } else {
        alert("Enter a number between 0-100. Canvas has been reset to 16x16");
        resizeCanvas(16);
    }
}

function resizeCanvas(size) {
    clearCanvas();        
    canvas.replaceChildren();
    createCanvas(size);
}






