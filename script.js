let moduleFunctions = (function() {

    function gameBoard (){
        let board = ["x","x","x",
                    "x", "x", "x",
                    "x", "x" ,"x" ]
        console.log(board)
    }

    return {
        gameBoard
    }
})() 


let person = (name,choice) => {
    return {
        name,choice
    }
}


let player1 = person("kamyaa", "x")
console.log(player1.name)
console.log(player1.choice)



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