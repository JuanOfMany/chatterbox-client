// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $createButton: $('btn create'),
  $cancelButton: $('btn cancel'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();

  },

  render: function() {
    // TODO: Render out the list of rooms.
    // empty out all childs(option tags) of the <select> tag
    RoomsView.$select.empty();
    // iterate over all Rooms._data
    Rooms._data.forEach(function(room) {
      // invoke renderRoom for each roomname
      RoomsView.renderRoom(room);
    });
    //
    RoomsView.$select.on(('change', RoomsView.handleChange));

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // create an option tag with the room name
    var roomName = `<option value='${roomname}' > ${roomname} </option>`;
    // append to <select> tag
    RoomsView.$select.append(roomName);
  },

  handleChange: function(event) {
    console.log('this changed something');
    // TODO: Handle a user selecting a different room.
    //this.innerText is the newly selected room


  },

  // when selected "Add Room"
  addRoomClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // get the form node, set its display property to "block"
    console.log('clicked');
    $('#btn-add-room').style.display = 'block';
  },

  //when Create Room button is pressed
  createRoomClick: function(event) {
    event.preventDefault();
    var text = $('#new-room').val();
    console.log(text);
    Rooms.addRoom(text);
    //rerender room list
  },

  //when create room form closed button is clicked
  closeFormClick: function(event) {
    // get the form node, set its display property to "block"
    $('#btn cancel').style.display = 'none';
  }

};
