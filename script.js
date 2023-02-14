function createCanvas() {
    let pixelCount = 0;
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            document.getElementById("canvas").appendChild(newPixel);
            pixelCount++;
        }
    }
    console.log(pixelCount);    
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

document.addEventListener("DOMContentLoaded", createCanvas);
const canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", pencilOn);
const pixels = document.querySelectorAll("div.pixel");
pixels.forEach(pixel => pixel.addEventListener("click", fillIn));
