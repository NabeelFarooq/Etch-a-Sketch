const grid = document.querySelector(".grid");
const resetBtn = document.querySelector(".reset");
const applyBtn = document.querySelector(".apply");
const rangeInput = document.querySelector("#slider");
const outputSize = document.querySelector("#output-size");

let noOfSquares = 8;

rangeInput.addEventListener('input',()=>{
    outputSize.textContent = rangeInput.value+" x "+rangeInput.value;
    noOfSquares = rangeInput.value;
});
applyBtn.addEventListener('click',()=>{
    createGrid(noOfSquares);
});
resetBtn.addEventListener('click',reset);
function createDiv(perSquareSize){
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${perSquareSize}px`;
    div.style.height = `${perSquareSize}px`;
    return div;
}
function createGrid(inputtedGridSize){
    reset();
    for(let i=0;i<inputtedGridSize;i++){
        for(let j=0;j<inputtedGridSize;j++){
            grid.appendChild(createDiv(grid.clientWidth/noOfSquares));
        }
    }
}

function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

grid.addEventListener('mouseover',(e)=>{
    if(e.target.matches('.box')){
        e.target.classList.add("active");
    }
});
