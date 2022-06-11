// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  //add : a function that adds a username to friends._data
  add: function(friend) {
    Friends._data.push(friend);
  },

  //toggle: a function that you can add/remove friend from friends._data
  remove: function(friend) {
    Friends._data.splice(Friends._data.indexOf(friend), 1);
  },

  //isMyFriend: check if user is in friends._data
  isMyFriend: function(friend) {
    return (Friends._data.includes(friend));
  }
};