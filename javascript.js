const container = document.querySelector(".container");

//row 0
const squareDiv00 = document.createElement("div");
container.appendChild(squareDiv00);

const squareDiv01 = document.createElement("div");
container.appendChild(squareDiv01);

const squareDiv10 = document.createElement("div");
container.appendChild(squareDiv10);

const squareDiv11 = document.createElement("div");
container.appendChild(squareDiv11);

// array for row 1
var squareDiv1 = [];
for(let i=0;i<4;++i){
    squareDiv1[i] = document.createElement("div");
    container.appendChild(squareDiv1[i]);
}
// array for row 2
var squareDiv2 = [];
for(let i=0;i<4;++i){
    squareDiv2[i] = document.createElement("div");
    container.appendChild(squareDiv2[i]);
}
// array for row 3
var squareDiv3 = [];
for(let i=0;i<4;++i){
    squareDiv3[i] = document.createElement("div");
    container.appendChild(squareDiv3[i]);
}

// code for 8
// const grid = document.querySelectorAll(".container div");























// solve one row of 16 squares,
// loop 15 times along each row to fill 16*16 grid.
// let row0 = [];
// for (let i = 0, j = 0; j < 16; j++) {
//     nameOfDiv = i+" "+j;
    
// }

// let grid2d = [];
// for (var i = 0; i < 16; i++) {
//   grid2d[i] = [];
// }
// console.log(grid2d); 
// 
