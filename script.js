// alert("Hello!");

//vanilla
//var input = document.getElementById('user-input')



$(document).ready(function(){
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

