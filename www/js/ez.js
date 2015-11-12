var ez = {
  get_ele: function(id) {
    return document.getElementById(id);
  },
  hide: function(id) {
    ez.get_ele(id).style.display = "none";
  },
  show: function(id) {
    ez.get_ele(id).style.display = "block";
  },
  init: function(num_screens) {
    ez.hide('top_bar');
    ez.hide('step-bar-container');
    ez.hide('step_one_page');
    ez.get_ele("summary").style.height = screen.height;
    ez.get_ele("summary").style.width = screen.width;
    ez.hide('summary');
  },
  c: function(id, clickfunction) {
    ez.get_ele(id).addEventListener('click', clickfunction);
  },
  getNatural: function (imgloc) {
    var img = document.createElement('img');
    img.onload = function() {
      return {width: img.width, height: img.height};
    }
    img.setAttribute("src", imgloc);
  }
};
