// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // create property add that is a function that takes a message
  // and pushs it to _data array
  add: function(message) {
    this._data.push(message);
  },

  // another property retrieve that has a value of a function should take a username
  // that returns an array with only messages with a certain username value
  retrieve: function(username) {
    return this._data.filter((message) => message.username === username );
  }

};