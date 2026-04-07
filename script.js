const cells =  document.querySelectorAll(".cell");
let player = "X"

function handleClick(e) {
    const cell = e.target

    if (cell.textContent !== "") return

    cell.textContent = player
    
    cell.classList.add(player === "X" ? "x" : "o")

    if (player == "X") {
        player = "O"
    } else {
        player = "X"
    }
    console.log(player)
}

cells.forEach(cell => {
    cell.addEventListener("click", handleClick)
})


