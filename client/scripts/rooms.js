// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  selected: 'People striving at Hack Reactor',
  // TODO: Define how you want to store the list of rooms
  _data: ['room1', 'dontgointhisroom'],

  // {name : 'roomname', selected : true}, ...
  addRoom: function(roomNameString) {
    Rooms._data.push(roomNameString);
    // set selected as added room
    //call re-rendering of room list
  }

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.


};