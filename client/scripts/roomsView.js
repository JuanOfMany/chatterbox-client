// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $addButton: $('#btn-add-room'),
  $createButton: $('.create'),
  $cancelButton: $('.cancel'),
  $select: $('#rooms select'),
  $addRoomForm: $('.form-container'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$addRoomForm.css('display', 'none');
    RoomsView.render();
    Rooms.selected = Rooms._data[0];

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
    // var $select = $('#rooms select');
    // console.log($select.html());
    RoomsView.$addButton.on('click', RoomsView.addRoomClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$createButton.on('click', RoomsView.createRoomClick);
    RoomsView.$cancelButton.on('click', RoomsView.closeFormClick);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // create an option tag with the room name
    var roomName = `<option class="room" value='${roomname}' > ${roomname} </option>`;
    // append to <select> tag
    RoomsView.$select.append(roomName);
    // var $room = $('.room');
    // console.log($room);
    // $room.on('click', function() { console.log('this might work?'); });
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // get/set selected property in Rooms to the selected roomName
    Rooms.selected = RoomsView.$select.val();
    //this.innerText is the newly selected room

    MessagesView.render();

  },

  // when selected "Add Room"
  addRoomClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // get the form node, set its display property to "block"
    console.log('clicked');
    RoomsView.$addRoomForm.css('display', 'block');
  },

  //when Create Room button is pressed
  createRoomClick: function(event) {
    event.preventDefault();
    var text = $('#new-room').val();
    Rooms.addRoom(text);
    RoomsView.renderRoom(text);
    RoomsView.$addRoomForm.css('display', 'none');

    // TODO
    // set the selected
  },

  //when create room form closed button is clicked
  closeFormClick: function(event) {
    // get the form node, set its display property to "block"
    // $('#cancel').style.display = 'none';
    RoomsView.$addRoomForm.css('display', 'none');
  }

};
