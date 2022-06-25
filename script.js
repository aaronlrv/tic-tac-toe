let playerHeader = document.querySelector(".player")
let playerChoice = document.querySelector(".choice")


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
    let board = ["x","x","x",
                "x", "x", "x",
                "x", "x" ,"x" ]
     console.log(board)
    
     return{
        board
     }
})()

const displayController= (() => {
        let player1Name = player1.name
        let player1Choice = player1.choice
        let player2Name = player2.name
        let player2Choice = player2.choice

        let displayNames = (() => {
            playerHeader.textContent = player1Name
            playerChoice.textContent = player1Choice
        })()

        return{
            displayNames
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