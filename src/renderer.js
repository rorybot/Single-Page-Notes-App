(function(exports) {
  function Renderer() {
  }

Renderer.prototype.view = function(values) {
  for(var key in values) {
    document.getElementById(key).innerHTML = values[key];
  }
};

var renderLink = function(note,index){
  link = "<a href='#$" + index + "'>" + note.returnNote().substring(0, 20) + "</a>"
  return link
}

Renderer.prototype.renderLinks = function(notes){
  var renderedLinks = ""
  notes.forEach(function(note, index) {
      renderedLinks += renderLink(note,index)
  });
  return "<ul class='note_list'>" + renderedLinks + "</ul>"
}

exports.Renderer = Renderer;
})(this);
