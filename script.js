// alert("Hello!");

//vanilla
//var input = document.getElementById('user-input')

var rooms = {
    "start": {
        "description": "<p>This it the description for the start</p>"
    },
    "room 1": {
        "description": "<p>This it the description for room1</p>"
    },
    "room 2" :{
        "description": "<p>This it the description for room2</p>"
    }
    }
    


$(document).ready(function(){
    $('#game-text').append("<p>" + rooms["start"].description + "</p>");
//function between brackets executes only when ready.
//get value of input, event listener
    $(document).keypress(function(key){
        if(key.which === 13 && $('#user-input').is(':focus')) { 
        //if key is enter and text box selected.
        //jquery
        var value = $('#user-input').val(); //val returns value of what is referenced.
        alert(value);
        }
    })
})

