// alert("Hello!");

//vanilla
//var input = document.getElementById('user-input')
//jquery
var input = $('user-input').val(); //val returns value of what is referenced.


$(document).ready(function(){
//function between brackets executes only when ready.
//get value of input, event listener
    $(document).keypress(function(key){
        alert(key.which);
    })
})

