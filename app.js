const colorPickToggle = 
 document.querySelector(".toggle-picker");
const toggleBckgrndPicker =  
document.querySelector(".toggle-background-picker");
const colors = ["brown","blue","red","yellow","black","white","purple","green","orange","grey","pink","turqoise","brown","blue","red","yellow","black","white","purple","green","orange","grey","pink","turqoise"];
const lengthSlider = document.querySelector(".slider");
lengthText = document.querySelector("#length"); 
const redrawButton = document.querySelector(".reset-canvas");
const colorSelectPixels = Array.from(document.querySelectorAll(".select-pixel"));
const colorSelectBGPixels = Array.from(document.querySelectorAll(".select-bg-pixel"));
const togglePicker = document.querySelector(".toggle-picker")
const toggleBackgroundPicker = document.querySelector(".toggle-background-picker")
let length = 16;
let currentColor = "black";
let currentBgColor = "white";
lengthText.innerText = `Canvas length: ${lengthSlider.value}`;


for (let i = 0; i<12; i++)
{
    colorSelectPixels[i].style.backgroundColor = colors[i];
}
for (let i = 0; i<12; i++)
{
    colorSelectBGPixels[i].style.backgroundColor = colors[i];
}



lengthSlider.addEventListener("input", event => {
    console.log("changed");
    length = lengthSlider.value;
    console.log(lengthSlider.value)
    lengthText.innerText = `Canvas length: ${lengthSlider.value}`;
})

colorSelectPixels.forEach(pixel => {
    pixel.addEventListener("click", event => {
        currentColor = pixel.style.backgroundColor;
        togglePicker.style.backgroundColor = currentColor;
    })
});

colorSelectBGPixels.forEach(pixel => {
    pixel.addEventListener("click", event => {
        currentBgColor = pixel.style.backgroundColor;
        toggleBackgroundPicker.style.backgroundColor = currentBgColor;
    })
});

colorSelectPixels.forEach(pixel =>{
    addEventListener("click", event => {
        pixel.style.back
    })
});



colorPickToggle.addEventListener("click",event => {
    const colorPicker = document.querySelector(".color-picker");
    if (colorPicker.style.display != "flex" )
    {
        colorPicker.style.display = "flex" 
    }
    else {
        colorPicker.style.display = "none" 
    }
})

toggleBckgrndPicker.addEventListener("click",event => {
    const colorPicker = document.querySelector(".background-color-picker");

    if (colorPicker.style.display != "flex" )
    {
        colorPicker.style.display = "flex" 
    }
    else {
        colorPicker.style.display = "none" 
    }
})

redrawButton.addEventListener("click", event => {
    const canvas = document.querySelector(".canvas");
    canvas.innerHTML="";
    drawCanvas();
})

function drawCanvas() {
    length = lengthSlider.value;
    console.log(length);
    const canvas = document.querySelector(".canvas");
    canvas.innerHTML = ""
    for (let i=0; i<length; i++)
    {
        const div = document.createElement("div");
        div.className = "canvas-row"
        for (let j=0; j<length; j++)
        {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.width = `${80/length}vh`;
            pixel.style.height = `${80/length}vh`;

            div.appendChild(pixel)
        }
        canvas.appendChild(div)
    }
    const pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", event => {
            pixel.style.backgroundColor = currentColor;
        })
    });
    
}
colorSelectPixels.forEach(pixel => {

});


