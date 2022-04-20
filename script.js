// alert("Hello!");

//vanilla
//var input = document.getElementById('user-input')



//keeping track of the current room
var currentRoom = "start";

//possible commands in array
var commands = ["go", "look", "pickup", "talk"]
var inventory = []
//if room, currentRoom (start) direction "exists" (is not undefined)
//then current room will be updated. 
function changeRoom(dir) {
    if(rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
        //if the move is valid but the direction is not available (in game) state you cannot go that way
    } else {
        $('#game-text').append("<p>you cannot go that way</p>");
    }
}

function showHelp() {
    $('#game-text').append("<p>Here are the possible commands</p>");
    $('#game-text').append("<p><ul>");
    //increment through commands array from 0 to length of commands 
    for(var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul></p>")
}

function showInventory() {
    if(showInventory.length === 0) {
        $('#game-text').append("<p>You are not carrying anything!</p>");
        return;
    }
    $('#game-text').append("<p>Here is yourt inventory</p>");
    $('#game-text').append("<p><ul>");
    //increment through commands array from 0 to length of commands 
    for(var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul></p>")
}

function playerInput(input) {
    // separate words by space
    var command = input.split(" ")[0];
//switch case
    switch(command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir)
            break;
            //showHelp function, help = showHelp
        case "help":
            showHelp();
            break;
    case "inventory":
        showInventory()
        break;
    // case "west":
    //     changeRoom("west")
    //     break;
    default:
        alert(" Invalid command");
}
}
//function between brackets executes only when ready.
$(document).ready(function(){

    $('#game-text').append("<p>" + rooms["start"].description + "</p>");

//get value of input, event listener
    $(document).keypress(function(key){
          //if key is enter and text box selected.
        if(key.which === 13 && $('#user-input').is(':focus')) { 
      
        //jquery
            var value = $('#user-input').val().toLowerCase(); //user input to lowercase val returns value of what is referenced.
            playerInput(value);
            

        }
    })
})

