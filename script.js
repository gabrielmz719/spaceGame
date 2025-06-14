const tileSize = 32;
const rows = 16;
const collumns = 16;


let board;
let boardWidth = tileSize * collumns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let shipx = tileSize * collumns/2 -tileSize
let shipy = tileSize * rows - tileSize * 2; 

let ship = {
    x : shipx,
    y : shipy,
    width : shipWidth,
    height : shipHeight
}

window.onload = function(){
    board = document.getElementById('board');
    board.width=boardWidth;
    board.height = boardHeight;
    context=board.getContext("2d");
}
