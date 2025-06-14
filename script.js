const tileSize = 32;
const rows = 16;
const collumns = 16;


let board;
let boardWidth = tileSize * collumns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize*2 ;
let shipHeight = tileSize*2;
let shipx = tileSize * collumns/2 -tileSize
let shipy = tileSize * rows - tileSize * 2; 

let ship = {
    x : shipx,
    y : shipy,
    width : shipWidth,
    height : shipHeight
}
let shipVelocityx = tileSize;

window.onload = function(){
    board = document.getElementById('board');
    board.width=boardWidth;
    board.height = boardHeight;
    context=board.getContext("2d");

    //draw initial ship
    // context.fillStyle ='green';
    // context.fillRect(ship.x,ship.y,ship.width,ship.height);

    //load Images 
     shipImg = new Image();
     shipImg.src ="./img/nave_player.png";
     shipImg.onload = function(){
        context.drawImage(shipImg,ship.x,ship.y,ship.width,ship.height)
     }
     requestAnimationFrame(update);
     document.addEventListener("keydown",moveShip);
}

function update(){
    requestAnimationFrame(update);

    context.drawImage(shipImg,ship.x,ship.y,ship.width,ship.height);
}

function moveShip(e){
    if(e.code == "ArrowLeft"){
        ship.x -= shipVelocityx;
    }else if(e.code == "ArrowRight"){
        ship.x += shipVelocityx;
    }
}
