const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector(".reset-board")
let player = "X"
let board = ["", "", "", "", "", "", "", "", ""]

const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
                    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                    [0, 4, 8], [2, 4, 6]]

function handleClick(e) {
    const cell = e.target

    if (cell.textContent !== "") return

    cell.textContent = player

    cell.classList.add(player === "X" ? "x" : "o")

    const index = cell.dataset.index
    board[index] = player

    if (checkWinner()) {
        console.log(player + " won")
        restartGame()
        return
    }

    if (player == "X") {
        player = "O"
    } else {
        player = "X"
    }
    console.log(board)

}

function restartGame(){
    board = ["", "", "", "", "", "", "", "", ""]
    player = "X"

    cells.forEach( cell=> {
        cell.textContent = ""
        cell.classList.remove("x","o")
    })
}


function checkWinner() {
    for (let pattern of winPattern) {
        let a = pattern[0]
        let b = pattern[1]
        let c = pattern[2]

        if (
            board[a] === player &&
            board[b] === player &&
            board[c] === player
        ) {
            console.log("winner")
            return true
        }
    }
    return false
}

cells.forEach(cell => {
    cell.addEventListener("click", handleClick)
})

resetButton.addEventListener("click", restartGame)


