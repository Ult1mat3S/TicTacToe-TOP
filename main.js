const gameBoard = (() => {
    board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
    return board;
})

const displayController = (() => {
    let container = document.querySelector('#grid');
    // let displayBoard = document.createElement('h1')
    // displayBoard.setAttribute('id', 'board');

    for (i = 0; i < board.length; i++) {
        // let itemsContainer = document.createElement('h1')
        // itemsContainer.setAttribute('id', 'itemsContainer');
        // let selectItemsContainer = document.querySelector('#itemsContainer');
        let boardItems = document.createElement('p')
        boardItems.textContent = `${board[i]}`
        let board1 = document.createElement('div')
        let selectBoard = document.querySelector('div');
        container.appendChild(boardItems)
    }
})

function players() {
    let player1 = null
    let player2 = null
}


gameBoard()
displayController()

