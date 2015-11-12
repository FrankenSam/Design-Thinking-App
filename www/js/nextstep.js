stepColor = ["35b7e5", "66cc70", "e5d36a", "e2915a", "b54747"];

function nextStep() {
	if(currStepNum != 5) {
    currStepNum++;
		ez.get_ele("progressbar-" + currStepNum).style.backgroundColor = "#"+ stepColor[currStepNum-1];
    ez.get_ele("progressbar-" + currStepNum).style.color = "#fff";
    ez.get_ele("progressbar-" + currStepNum).style.fontWeight = "bold";
    ez.get_ele("progressbar-" + (currStepNum)).style.fontWeight = "normal";
		ez.get_ele("topbar").style.backgroundColor = "#"+ stepColor[currStepNum-1];
    switch (currStepNum) {
      case 1:
        ez.show("header_bar_EMPATHY");
        break;
      case 2:
        ez.hide("header_bar_EMPATHY");
        ez.show("header_bar_DEFINE");
        nextstep.changeArrowColor();
        break;
      case 3:
        ez.hide("header_bar_DEFINE");
        ez.show("header_bar_IDEATE");
        nextstep.changeArrowColor();
        break;
      case 4:
        ez.hide("header_bar_IDEATE");
        ez.show("header_bar_PROTOTYPE");
        nextstep.changeArrowColor();
        break;
      case 5:
        ez.hide("header_bar_PROTOTYPE");
        ez.show("header_bar_TEST");
        nextstep.changeArrowColor();
        break;
    }
	} else {
    currStepNum = 0;
    nextstep.resetArrowColor();
  }
}

var nextstep = {
  changeArrowColor: function() {
	var color = stepColor[currStepNum-1];
	if(currStepNum == 3) { color = "feeb8b"; } 
    ez.get_ele("next-arrow-triangle").setAttribute("style", "border-left: 5vw solid #"+color);
    //ez.get_ele("next-arrow-triangle").setAttribute("style", "border-left: 5vw solid #"+stepColor[currStepNum-1]);
    ez.get_ele("next-arrow-box").style.backgroundColor = "#"+color;
  },
  resetArrowColor: function() {
    ez.get_ele("next-arrow-triangle").setAttribute("style", "border-left: 5vw solid #"+stepColor[0]);
    ez.get_ele("next-arrow-box").style.backgroundColor = "#" + stepColor[0];
  }
}
