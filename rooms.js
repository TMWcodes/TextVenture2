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