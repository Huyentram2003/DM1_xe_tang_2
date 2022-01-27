let bom = document.getElementById('boom'),
    bomStyle = getComputedStyle(bom);
let tank = document.getElementById('tank');

let speed = 19,
    posX = 0,
    posY = 0;

function up() {
    posY -= speed;
    tank.style.top = posY + 'px';
    if (tank.style.top == bomStyle.top &&
        tank.style.left == bomStyle.left) {
        tank.src = './img/explosion.png';
        bom.remove();
    }
}

function down() {
    posY += speed;
    tank.style.top = posY + 'px';
    if (tank.style.top == bomStyle.top &&
        tank.style.left == bomStyle.left) {
        tank.src = './img/explosion.png';
        bom.remove();
    }
}

function left() {
    posX -= speed;
    tank.style.left = posX + 'px';
    if (tank.style.top == bomStyle.top &&
        tank.style.left == bomStyle.left) {
        tank.src = './img/explosion.png';
        bom.remove();
    }
}

function right() {
    posX += speed;
    tank.style.left = posX + 'px';
    if (tank.style.top == bomStyle.top &&
        tank.style.left == bomStyle.left) {
        tank.src = './img/explosion.png';
        bom.remove();
    }
}


function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right()
            break;
        case 40:
            down();
    }
}
document.addEventListener('keydown', moveSelection);