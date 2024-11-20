function Ship(len=2, hit=0, sunk=false) {
    let length = len;
    let hits = hit;
    let isSunk = sunk;

    function hit() {
        hits++;
    }

    function isSunk() {
        if (hits == length) {
            isSunk = true;
        }
    }
    return { length, hits, isSunk }
}

function Gameboard() {
    const board = [] 
    for(let i = 0; i < 10; i++) {
        const y = []
        board.push(y)
        for (let j = 0; j < 10; j++) {
            const x = []
            y.push(x);
        }
    }

    function placeShip(x,y) {
        let posY = y;
        let posX = x;
        
        const ship = new Ship();
        board[posY][posX].push(ship);
    }

    function receiveAttack(x,y) {
        if (board[y][x]) {

        }
    }
}