function Ship(len=2, isHit=0, sunk=false) {
    let length = len;
    let hits = hit;
    let Sunk = sunk;

    function hit() {
        hits++;
    }

    function isSunk() {
        if (hits == length) {
            isSunk = true;
        }
    }
    return { length, hits, Sunk, hit, isSunk }
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
        const size = Math.floor(Math.random() * 3) + 1
        const ship = new Ship(size, 0, false);

        const orientation = Math.floor(Math.random() * 2)

        if (orientation == 0) {
            if (board[y-size]) {
                for (let i = 0; i < size; i++) {
                    board[y-i][x].push(ship);
                }
            }

            else if (board[y+size]) {
                for (let i = 0; i < size; i++) {
                    board[y+i][x].push(ship);
                }
            }
        }

        else if (orientation == 1) {
            if (board[y][x-size]) {
                for (let i = 0; i < size; i++) {
                    board[y-i][x].push(ship);
                }
            }

            else if (board[y][x+size]) {
                for (let i = 0; i < size; i++) {
                    board[y+i][x].push(ship);
                }
            }
        }
    }

    return { board, placeShip }
}

const playerPrimary = Gameboard()
playerPrimary.placeShip(0,0)

console.log(Gameboard().board)