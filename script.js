const tileSize = 32;
const rows = 16;
const collumns = 16;


let board;
let boardWidth = tileSize * collumns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize * 2;
let shipHeight = tileSize * 2;
let shipx = tileSize * collumns / 2 - tileSize
let shipy = tileSize * rows - tileSize * 2;

let ship = {
    x: shipx,
    y: shipy,
    width: shipWidth,
    height: shipHeight
}
let shipVelocityx = tileSize;

//alien variable

let alienArray = [];
let alienWidth = tileSize * 2;
let alienHeight = tileSize * 2;
let alienx = tileSize;
let alieny = tileSize;
let alienImg;


let alienRows = 2;
let alienColumns = 2;
let alienCount = 0; //numero de aliens no jogo


window.onload = function () {
    board = document.getElementById('board');
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    //draw initial ship
    // context.fillStyle ='green';
    // context.fillRect(ship.x,ship.y,ship.width,ship.height);

    //load Images 
    shipImg = new Image();
    shipImg.src = "./img/nave_player.png";
    shipImg.onload = function () {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height)
    }
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);

    alienImg = new Image();
    alienImg.src = "./img/naves_inimiga.png"
    createAliens();

    

}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    //alien
    for (let i = 0; i < alienArray.length; i++) {
        
        let alien = alienArray[i];

        if (alien.alive) {
            context.drawImage(alien.img, alien.x, alien.y, alien.width, alien.height);
        }
    }
}

function moveShip(e) {
    if (e.code == "ArrowLeft" && ship.x - shipVelocityx >= 0) {
        ship.x -= shipVelocityx;
    } else if (e.code == "ArrowRight" && ship.x + shipVelocityx + ship.width <= board.width) {
        ship.x += shipVelocityx;
    }
}

function createAliens() {
    console.log('criando aliens')
    for (let c = 0; c < alienColumns; c++) {
        console.log('alien criados na posição c')
        for (let r = 0; r < alienRows; r++) {
            console.log('aliens criados na posição r')
            let alien = {
                img: alienImg,
                x: alienx + c * alienWidth,
                y: alieny + r * alienHeight,
                width: alienWidth,
                height: alienHeight,
                alive: true,
            }
            alienArray.push(alien);
        }
    }
    alienCount = alienArray.length;
}