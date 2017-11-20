(function(exports) {
  function NoteBuddy() {
    this.list = [];
  }

  NoteBuddy.prototype.storeNote = function(note) {
    return this.list.push(note);
  };

  NoteBuddy.prototype.createNote = function(string, noteConstructor = Note, callback) {
    var note = new noteConstructor(string);
    this.storeNote(note);
    callback && callback()
    return note;
  };

  NoteBuddy.prototype.noteList = function() {
    var htmlNoteList = this.renderList()
    return htmlNoteList
  };

  exports.NoteBuddy = NoteBuddy;
})(this);
