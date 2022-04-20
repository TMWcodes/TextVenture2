// alert("Hello!");

//vanilla
//var input = document.getElementById('user-input')



//keeping track of the current room
var currentRoom = "start";

function changeRoom(dir) {
    if(rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
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
            //switch case
            switch(value) {
                case "north":
                    changeRoom("north")
                    break;
                case "south":
                    changeRoom("south")
                    break;
                case "east":
                    changeRoom("east")
                    break;
                case "west":
                    changeRoom("west")
                    break;
                default:
                    alert("invalid move");
            }

        }
    })
})

