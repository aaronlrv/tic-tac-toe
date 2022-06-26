let playerHeader = document.querySelector(".player")
let playerChoice = document.querySelector(".choice")
let player2Header = document.querySelector(".player2")
let player2ChoiceSlot = document.querySelector(".choice2")
let grid = document.querySelector(".grid")
let cell = document.querySelectorAll(".cell")



let person = (name,choice) => {
    return {
        name,choice
    }
}

let player1 = person("kamyaa", "x")
let player2 = person("aaron", "o")
console.log(player1.name)
console.log(player1.choice)
console.log(player2.choice)
console.log(player2.name)

const gameBoard = (()=> {
    let board = [
        {
          id: '1-1',
          value: ''
        },
        {
          id: '1-2',
          value: ''
        },
        {
          id: '1-3',
          value: ''
        },
        {
          id: '2-1',
          value: ''
        },
        {
          id: '2-2',
          value: ''
        },
        {
          id: '2-3',
          value: ''
        },
        {
          id: '3-1',
          value: ''
        },
        {
          id: '3-2',
          value: ''
        },
        {
          id: '3-3',
          value: ''
        },
        ]
     console.log(board)

     let turn = 1;
      let boardValue = undefined

     let displayBoard = (() => {
        grid.addEventListener("click", (e) => {
            console.log(e.target)


            let click = e.target
            let clickedCell = click.getAttribute("data-index")
            console.log(clickedCell)
            console.log()

            


          


            isEqual = (obj) => obj.id === clickedCell
            console.log(board.findIndex (isEqual) + "Cell Index" )
             let arrayIndex = board.findIndex (isEqual)
             console.log(arrayIndex)

             if (e.target.textContent === "o" || e.target.textContent === "x"){
              alert ("User has already placed a choice there!")
             } else {
              

            if (turn === 1) {
              boardValue = "x"
              turn = 2;
            } else  {
              boardValue = "o"            
              turn = 1;
            }
             board[arrayIndex].value = boardValue 

             }
            
             console.log(e.target.value)
             for (let cell of board) {
                document.querySelector(`[data-index="${cell.id}"]`).textContent = cell.value
         }


        })
    })()
    
    
     return{
        board,
        displayBoard,
     }
})()

let displayController= (() => {
        let player1Name = player1.name
        let player1Choice = player1.choice
        let player2Name = player2.name
        let player2Choice = player2.choice

        let displayNames = (() => {
            playerHeader.textContent = player1Name
            playerChoice.textContent = player1Choice
            player2Header.textContent = player2Name
            player2ChoiceSlot.textContent = player2Choice
        })()


        return{
            displayNames
            
        }
    })()


let gameFlow = (() => {

    let winCondition = (() => {

    })()

    return{
        turns, winCondition
    }

})()




/// 3 modueles
/// gameboard gameFlowCOntroller
/// displayCOntroller

///gameboard would contain the array, detection of player input 
///gameflow would contain the turn system detection of player input may go here as well 
/// displayCOntroller would update the displays of scores and the gameboard (updated array)SS
/// convert array into board by creating a grid and then updating their content with markets in gameboard 

/// only factory function
/// players
/// "get" and "set" helper functions could go under factories

/// the whole "Start screen" "player selection" etc. can be spread out through multiple modules
/// would not recommend throwing start screen whole button thing into a seperate module 