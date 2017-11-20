createNote();
showSingleNote();

var noteBuddy = new NoteBuddy();
var buddy = new Buddy();
var renderer = new Renderer();

function createNote() {
  document
  .getElementById("create_note")
  .addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    _noteCreationCall()
    _renderLinks()
  });
}

function showSingleNote() {
  window
    .addEventListener("hashchange", function(showNote) {
      var noteIndex = location.hash.split("$")[1];
      var values = {
        single_note: renderer.singleNote(noteIndex, noteBuddy.list)
      };
      renderer.view(values);
    });
}

function _noteCreationCall(){
  var text = document.getElementById("note").value;
  noteBuddy.createNote(text);
}

function _renderLinks(){
  var renderedLinks = renderer.renderLinks(noteBuddy.list)
  var values = {
    note_list: renderedLinks,
    buddy: buddy.createNote()
  };
  renderer.view(values);
}
