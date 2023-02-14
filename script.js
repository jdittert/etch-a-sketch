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

document.addEventListener("DOMContentLoaded", function() { createCanvas(); });