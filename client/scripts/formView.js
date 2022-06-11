// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {
  //this for only for submitting messages
  $form: $('#send'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    //extract arguments from message id on submit
    var message = {text: $('#message').val(), username: App.username, roomname: Rooms.selected };
    //var message = {text: blahblah, username: aqwghtehw, roomname: someroom}
    //successful callback function that invokes Messages.add with "this".data

    //successCB can be a function that push message to _data,  rerenders the $chat
    var successCB = function() {
      Messages._data.push(message);
      MessagesView.render();
      console.log(Rooms.selected);
    };

    Parse.create(JSON.stringify(message), successCB);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};