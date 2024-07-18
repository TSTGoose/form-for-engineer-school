const inputs_container = document.querySelector(".inputs-container");
const inputs_items = document.querySelectorAll(".inputs-items");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const items_count = inputs_items.length;
const max_width = parseInt(getComputedStyle(inputs_container).maxWidth) - 32;
const scroll_limited = max_width * (items_count - 1);
let valueX = max_width;
let position = 0;

function prevBlock(){
    if(position < 0){
        position += valueX;
    }
    else return
    console.log(getComputedStyle(inputs_container).transform)
    inputs_container.style.transform = `translate(${position}px, 0)`
}

function nextBlock(){
    if(position > -scroll_limited){
        position -= valueX;
    }
    else return
    inputs_container.style.transform = `translate(${position}px, 0)`
}

prevButton.addEventListener("click", () => {
    prevBlock();
})

nextButton.addEventListener("click", () => {
    nextBlock();
})
