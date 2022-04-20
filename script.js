// alert("Hello!");

//vanilla
//var input = document.getElementById('user-input')

//rooms and descriptions
var rooms = {
    "start": {
        "description": "This it the description for the start",
        "directions": {
            "north": "room 1",
            "east": "room 2",
            "south": "room 3",
            "west":"room 4"
        }
    },
    "room 1": {
        "description": "<p>This it the description for room1</p>",
        "directions": {
            "south": "start"
        }
    },
    "room 2" :{
        "description": "<p>This it the description for room2</p>",
        "directions": {
            "west": "start"
        }
    },
    "room 3" :{
        "description": "<p>This it the description for the room 3</p>",
        "directions": {
            "north": "start"
        }
    },
    "room 4" :{
        "description": "<p>This it the description for the room 4</p>",
        "directions": {
            "east": "start"
        }
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
                    alert("you have gone north")
                    break;
                case "south":
                    alert("you have gone south")
                    break;
                case "east":
                    alert("you have gone east")
                    break;
                case "west":
                    alert("you have gone west")
                    break;
                default:
                    alert("invalid move");
            }

        }
    })
})

