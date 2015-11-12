var swipe = {
  addL: function(id,func) {
    swipe_element = ez.get_ele(id);
    swipe_detector = new Object();
    swipe_detector.startX = 0;
    swipe_detector.startY = 0;
    swipe_detector.endX = 0;
    swipe_detector.endY = 0;
    var min_x = 40;  //min x swipe for horizontal swipe
    var max_x = 40;  //max x difference for vertical swipe
    var min_y = 40;  //min y swipe for vertical swipe
    var max_y = 40;  //max y difference for horizontal swipe
    var direc = "";

    swipe_element.addEventListener('touchstart',function(e){
      var t = e.touches[0];
      swipe_detector.startX = t.screenX;
      swipe_detector.startY = t.screenY;
    },false);
    swipe_element.addEventListener('touchmove',function(e){
      e.preventDefault();
      var t = e.touches[0];
      swipe_detector.endX = t.screenX;
      swipe_detector.endY = t.screenY;
    },false);
    swipe_element.addEventListener('touchend',function(e){
      //horizontal detection
      if ((((swipe_detector.endX - min_x > swipe_detector.startX) || (swipe_detector.endX + min_x < swipe_detector.startX)) && ((swipe_detector.endY < swipe_detector.startY + max_y) && (swipe_detector.startY > swipe_detector.endY - max_y)))) {
        if(swipe_detector.endX > swipe_detector.startX) direc = "r";
        else direc = "l";
      }
          //vertical detection
      if ((((swipe_detector.endY - min_y > swipe_detector.startY) || (swipe_detector.endY + min_y < swipe_detector.startY)) && ((swipe_detector.endX < swipe_detector.startX + max_x) && (swipe_detector.startX > swipe_detector.endX - max_x)))) {
        if(swipe_detector.endY > swipe_detector.startY) direc = "d";
        else direc = "u";
      }

      if (direc != "") {
        swipe_detector.startX = 0;
        swipe_detector.startY = 0;
        swipe_detector.endX = 0;
        swipe_detector.endY = 0;
        if(typeof func == 'function') func(id,direc);
      }
      direc = "";
    },false);
  }
}
