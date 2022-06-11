// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //invoke render
    MessagesView.render();
  },

  render: function() {
    //has a parameter of messages
    //clear feed somehow
    MessagesView.$chats.empty();
    //we will iterate over that messages array

    Messages._data.forEach(function(message) {
    //foreach iteration call render message passing in iteratee
    //if message.roomname === rooms.selected
      if (message.roomname === Rooms.selected) {
        MessagesView.renderMessage(message);
      }
    });
    // TODO: Render _all_ the messages.

    //add event listener to message
    var $username = $('.username');
    $username.on('click', MessagesView.handleClick);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    //has a parameter of a single message
    //use _.templates method to render a message to the HTML
    //Invoke _.template with (template we want, and message object)
    //template is a string version of the html we want
    //within that template function
    //have a <div>, to be filled out

    //if Friends.ismyFriend(message.username) {
    if (Friends.isMyFriend(message.username)) {
      var appendableMessage = MessageView.renderFriend(message);

    } else {
      var appendableMessage = MessageView.render(message);
    }
    //\/\/\/\/\/\/\/ COME BACK TO THIS LATER \/\/\/\/\/
    //convert message to XSS safe version <<< look into this together
    //then append div as a child of $chats node
    //MAKE MESSAGE A J QUERY OBJ
    MessagesView.$chats.prepend(appendableMessage);
  },


  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var friend = this.innerText;
    //check if username is in friendslist already, if not:
    if (!Friends.isMyFriend(friend)) {
      Friends.add(friend);
    } else {
      Friends.remove(friend);
    }
    console.log(Friends._data);
    //we will add the clicked message's username property
    //to... something in friends.js (probably an array of friends)
  }

};