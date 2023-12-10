const container = document.querySelector(".container");
let size = 0;
let noOfSquares = 0;
document.getElementById("sketch").onclick = function(){
    size = document.getElementById("sizeOfGrid").value;
    console.log(size);
    console.log(typeof(size));
    noOfSquares = parseInt(size, 10);
    console.log(noOfSquares);
    console.log(typeof(noOfSquares));
    for(let outer=0;outer<noOfSquares;++outer){
        for(let inner=0;inner<noOfSquares;++inner){
            this["squareDiv"+outer+inner] = document.createElement("div");
            container.appendChild(this["squareDiv"+outer+inner]);
            this["squareDiv"+outer+inner].textContent = outer+" "+inner;
        }
    }
}

const divs = document.querySelectorAll(".container div");
divs.forEach((diV)=>{
    let flexValue = 100/noOfSquares;
    diV.style.flexBasis = flexValue+"%";
    diV.style.minHeight = flexValue+"vh";
});







