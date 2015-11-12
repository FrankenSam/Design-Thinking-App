ez.init();


ez.c('new_project', function(event) {
  ez.show('create_project');
});

ez.c('project_name_exit', function(event) {
  ez.hide('create_project');
});

// click start for a new project
ez.c('overlay_start', function(event) {
  project_name = ez.get_ele("project_name_form").elements[0].value;
  file.createDir('DesignThinking/' + project_name);
  project_path = 'DesignThinking/' + project_name;
  ez.hide('startup');
  currStep = 'e_start';
  currStepNum = 1;
  stepName = 'empathy';
  counterColorStep(currStepNum);
  		toolbox.populate_tools();
		hideAllTools();
  changeInstr();
  ez.hide('create_project');
  ez.show('top_bar');
  ez.show('step_one_page');
  ez.show('step_instr');
ez.show('step-bar-container');
});

ez.c('open_project_exit', function(event) {
  ez.hide('project_selection');
});

ez.c('op_OK', function(event) {
  if (selectedproject > '') {
    ez.hide('project_selection');
    ez.hide('startup');
    ez.show('summary');
    file.getFiles(selectedproject);
    var deselect = document.getElementsByClassName('projectdiv');
    for (var v=0; v < deselect.length; v++) {
      deselect[v].style.backgroundColor = 'white';
      deselect[v].style.color = 'black';
    }
  }
});

function hideClass(myClass){
	var toHide = document.getElementsByClassName(myClass);
    for (var v=0; v < toHide.length; v++) {
        toHide[v].style.display = 'none';
    }
}

function showClass(myClass){
	var toShow = document.getElementsByClassName(myClass);
    for (var v=0; v < toShow.length; v++) {
        toShow[v].style.display = 'block';
    }
}

function hideAllTools(){
	hideClass('empathy-tool');
	hideClass('define-tool');
	hideClass('ideate-tool');
	hideClass('prototype-tool');
	hideClass('test-tool');
}
function changeClass(myElement, myClass){
	ez.get_ele(myElement).className = myClass;
}


// change color of step counter
function circleColor(one, two, three, four, five){
	if (one){
		ez.get_ele("circle-one").style.backgroundColor = scc1;
	}
  if (two){
		ez.get_ele("bar-one").style.borderColor = scc1;
		ez.get_ele("circle-two").style.backgroundColor = scc2;
	}

	if (three){
		ez.get_ele("bar-two").style.borderColor = scc2;
		ez.get_ele("circle-three").style.backgroundColor = scc3;
	}

	if (four){
		ez.get_ele("bar-three").style.borderColor = scc3;
		ez.get_ele("circle-four").style.backgroundColor = scc4;
	}

	if (five){
		ez.get_ele("bar-four").style.borderColor = scc4;
		ez.get_ele("circle-five").style.backgroundColor = scc5;
	}
}

function counterColorStep(stepNum){
	switch (stepNum){
		case 0:
			circleColor(0,0,0,0,0);
		break;
		case 1:
			circleColor(1,0,0,0,0);
		break;
		case 2:
			circleColor(1,1,0,0,0);
		break;
		case 3:
			circleColor(1,1,1,0,0);
		break;
		case 4:
			circleColor(1,1,1,1,0);
		break;
		case 5:
			circleColor(1,1,1,1,1);
		break;
		default:
			circleColor(0,0,0,0,0);

	}
}

function hideButtons(){
	// instruction buttons
	ez.hide("b_step_instr");
	ez.hide("b_step_vid_voice_rec");
	ez.hide("b_step_int_questions");
	ez.hide("b_step_take_pic");
	ez.hide("b_step_toolbox");
	ez.hide("b_step_end");

	// vid/voice rec buttons
	ez.hide("b_step_int_questions_2");
	ez.hide("b_step_time_up");
	ez.hide("b_step_vid_rec");
	ez.hide("b_step_voice_rec");

	// toolbox buttons
	ez.hide("b_toolbox_done");

	// photo capture buttons
	// ez.hide("b_take_pic");
	// ez.hide("b_pic_next");

	// timer buttons
	ez.hide("b_timer_done");
}




// function to easily show/hide the main buttons
function dispStep(nextStep){
	ez.get_ele("b_step_instr").style.display = nextStep;
}
function dispRec(rec){
	ez.get_ele("b_step_vid_voice_rec").style.display = 'inline-block'; //rec;
}
function dispQuest(quest){
	ez.get_ele("b_step_int_questions").style.display = 'inline-block'; //quest;
}
function dispQuest2(quest2){
	ez.get_ele("b_step_int_questions_2").style.display = 'inline-block'; //quest2;
}
function dispPic(pic){
	ez.get_ele("b_step_take_pic").style.display = 'inline-block'; //pic;
}
function dispTool(tool){
	ez.get_ele("b_step_toolbox").style.display = 'inline-block'; //tool;
}
function dispTimeUp(timeUp){
	ez.get_ele("b_step_time_up").style.display = timeUp;
}
function dispVid(vid){
	ez.get_ele("b_step_vid_rec").style.display = 'inline-block'; //vid;
}
function dispVoice(voice){
	ez.get_ele("b_step_voice_rec").style.display = 'inline-block'; //voice;
}
function dispToolDone(toolDone){
	ez.get_ele("b_toolbox_done").style.display = toolDone;
}
function dispTakePic(take){
	ez.get_ele("b_take_pic").style.display = 'inline-block'; //take;
}
function dispPicNextStep(next){
	ez.get_ele("b_pic_next").style.display = next;
}
function dispTimerDone(timeUp){
	ez.get_ele("b_timer_done").style.display = timeUp;
}
function dispEnd(allDone){
	ez.get_ele("b_step_end").style.display = allDone;
}



// step headers
function changeStepHeaderWheel(myColor, myPic){
	ez.get_ele("step_name_bar").style.color = myColor;
	ez.get_ele("step_color_wheel").src = myPic;
}
function changeStepHeader(myTitle){
	ez.get_ele("step_name_bar").innerHTML = myTitle;
}
function changeSubStepHeader(myTitle){
	ez.get_ele("step_subname_bar").innerHTML = myTitle;
}
function changeTimeLimitHeader(myTitle){
	ez.get_ele("step_time_limit").textContent = myTitle;
}
function toggleTimerOn(){
	//ez.get_ele("time-icon").src = "img/hourglass.png";
	ez.get_ele("time-icon").src = "img/main/timer-active.png";
}
function toggleTimerOff(){
	//ez.get_ele("time-icon").src = "img/hourglassG.png";
	ez.get_ele("time-icon").src = "img/main/timer-inactive.png";
}

function changeTitle(myTitle){
	ez.get_ele("step_title").innerHTML = myTitle;
	ez.get_ele("photo_capture_title").innerHTML = myTitle;
}
function changeText(myText){
	ez.get_ele("step_text").innerHTML = myText;
}
function changeButtonText(myButtonText){
	ez.get_ele("b_step_instr").innerHTML = "<h2>"+myButtonText+"</h2>";
}
function changePic(myPic){
	ez.get_ele("step_pic").src = myPic;
}

// click buttons for instruction page
ez.c("b_step_instr", function(event){
	changeInstr();
});
ez.c("b_step_vid_voice_rec", function(event){
	showRec();
});
ez.c("b_step_take_pic", function(event){
	showPhotoCapture();
});
ez.c("b_step_end", function(event){
	restartHome();
});


ez.c("b_toolbox_done", function(event){
	showPhotoCapture();
});
ez.c("b_step_voice_rec", function(event){
	showVoiceRec();
});
ez.c("start_voice_rec", function(event){
	if (!recording_voice & allow_voice_rec)
		startVoiceRec();
});
ez.c("b_step_vid_rec", function(event){
	showVidRec();
});
ez.c("start_vid_rec", function(event){
	if (allow_vid_rec)
		startVidRec();
});
ez.c("b_step_time_up", function(event){
	ez.hide("vid_voice_rec");
	ez.hide("vid_rec");
	ez.hide("voice_rec");
	ez.show("step_instr");
    ez.show('step_pic');

	// reset voice page parameters
	recording_voice = false;
	allow_voice_rec = true;
	allow_vid_rec = true;
	ez.get_ele("start_voice_rec").style.backgroundColor = "#ea4e4e";
	ez.get_ele("start_vid_rec").style.backgroundColor = "#ea4e4e";
	ez.get_ele("start_voice_rec_word").innerHTML = "<h3>Record</h3>";
	ez.get_ele("voice_rec_timer_pic").src = "img/empathy/interview-animation/1.png";

	changeInstr();
});
ez.c("b_step_toolbox", function(event){
	showToolbox();
});
ez.c("b_toolbox_done", function(event){
	showPhotoCapture();
});

// photo capture buttons
ez.c("b_take_pic", function(event){
	capturePhoto();
});
ez.c("b_pic_next", function(event){
	ez.hide("photo_capture");
	ez.show("step_instr");

	changeInstr();
});
ez.c("start_timer", function(event){
	if (!timer_on & allow_timer)
		startTimer();
});

ez.c("b_timer_done", function(event){
	timer_on = false;
	allow_timer = true;
	ez.get_ele("start_timer").style.backgroundColor = "#ea4e4e";
	ez.get_ele("start_timer_word").innerHTML = "<h3>Start Timer</h3>";
	ez.hide("timer");
	ez.show("step_pic_div");
	ez.get_ele("timer_pic").src = "img/ideate/timer/1.png";
	
	changeTimeLimitHeader(" ");
	toggleTimerOff();

	var text = "Now, take pictures of any notes or sketches you made for this step. ";
	changeText(text);
	dispPic("block");
});



// change content of instruction page
function changeInstr(){
	var title;
	var text;
	var pic;
	var buttonText;

	switch(currStep){
		case 'e_start':
			stepName = 'empathy';

			title = "1. Empathy";
			text = 	"Empathy is the ability to understand and share the feelings of another. " +
				"We must first come to understand our user in order to properly identify their needs. " +
				"<br><br>Before we start, remember to be as positive and as open-minded as you can be! Anything is possible. There is no win, no fail, just make. Let's get started and have some fun!";
			pic = "img/empathy/main.png";
			buttonText = "Start!";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeButtonText(buttonText);
			//changeStepHeaderWheel(scc1, 'img/color-wheel/step1.png');
			changeStepHeaderWheel(scc1, 'img/main/wheel/step1.png');
			changeStepHeader("Empathy (1/4): ");
			changeSubStepHeader("Introduction ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			dispStep("block");

			currStep='e_int1';
		break;
		case 'e_int1':
			title = "Interview";
			text = 	"In this initial step, you will get to understand the user by asking open-ended questions (what/why/why not)." +
				"Take a look at the example questions if you are unsure what type of open-ended questions to ask. You want to get your partner to tell you as many stories as they can within the time limit!";
			pic = "img/empathy/interview/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Empathy (2/4): ");
			changeSubStepHeader("Interview #1 ");
			changeTimeLimitHeader("5:00 ");
			toggleTimerOn();

			hideButtons();
			dispQuest("block");
			dispRec("block");


			currStep='e_int2';
		break;
		case 'e_int2':
			title = "Deeper Interview";
			text = "Did you get all the info you needed? It's difficult to achieve " +
					"in less than 5 minutes. So, it's time to dig deeper! Try to expand on the experiences your partner shared with you. A good place to start is with stories that your partner did not enjoy too much because that means there is something wrong for you to improve!";
			pic = "img/empathy/interview/2.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Empathy (3/4): ");
			changeSubStepHeader("Interview #2 ");
			changeTimeLimitHeader("5:00 ");
			toggleTimerOn();

			hideButtons();
			dispQuest("block");
			dispRec("block");

			currStep='e_tool1';
		break;
		case 'e_tool1':
			title = "";
			text = 	"Now that you've got all this info, it's time to put it all into perspective. " +
				"You've got several tools at your disposal. Select each to learn about them " +
				"and touch ready when you've chosen one you like!";
			pic = "img/empathy/tool/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Empathy (3/4): ");
			changeSubStepHeader("Empathy Tool ");
			changeTimeLimitHeader("3:00 ");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('empathy-tool');
			dispTool("block");

			currStep='e_complete';
		break;
		case 'e_complete':
			title = "Empathy Done";
			text = 	"You have gotten to understand your user. Now on to the next step!";
			pic = "img/empathy.png";
			buttonText = "Next Step: Define";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Empathy (4/4): ");
			changeSubStepHeader("Step Complete ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "next_step_button_div");
			dispStep("block");

			currStep='d_start';
		break;
		case 'd_start':
			currStepNum = 2;
			stepName = 'define';
			counterColorStep(currStepNum);
			e_complete = true;

			title = "2. Define";
			text = 	"It's time to define the problem based on how you understood your partner. " +
					"Try to make the correct problem clearer and more focused by checking with your partner.";
			pic = "img/define.png";
			buttonText = "Start!";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			//changeStepHeaderWheel(scc2, 'img/color-wheel/step2.png');
			changeStepHeaderWheel(scc2, 'img/main/wheel/step2.png');
			changeStepHeader("Define (1/4): ");
			changeSubStepHeader("Introduction ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "page_content_button_div");
			dispStep("block");

			currStep='d_tool1';
		break;
		case 'd_tool1':
			title = "Identify The Problem";
			text = 	"In this step, you will be taking all of the information you gathered about your partner " +
					"and pinpoint precisely what the issue is. The Define tools should help you.";
			pic = "img/define/tool/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Define (2/4): ");
			changeSubStepHeader("Tool for Definition");
			changeTimeLimitHeader("3:00");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('define-tool');
			dispTool("block");

			currStep='d_fillin1';
		break;
		case 'd_fillin1':
			title = "Identify";
			text = 	"Identify your partner's problem. Keep it short and sweet. Then fill it in below:";
			pic = "img/define/identify/1.png";
			buttonText = "Submit";
			ez.show("define_form");
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeButtonText(buttonText);
			changeStepHeader("Define (3/4): ");
			changeSubStepHeader("Fill in Problem");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			dispStep("block");

			currStep='d_fillin2';
		break;
		case 'd_fillin2':
			var client_name = ez.get_ele("name").elements[0].value;
			var client_problem = ez.get_ele("need").elements[0].value;
			var client_reason = ez.get_ele("insight").elements[0].value;
			ez.hide("define_form");
			title = "Problem Identified";
			text = 	"Here's what you came up with: ";
			pic = "img/define/identify-animation/1.png";
			buttonText = "Next Step!";

			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeButtonText(buttonText);

      var define_statement_text = client_name + " needs a way to " + client_problem + " because " + client_reason;
			define_statement.textContent = define_statement_text;
			define_statement.style.fontSize = "7.5vw";
			define_statement.style.textAlign = "center";
			document.getElementById("step_text").appendChild(define_statement);
      var d = getDateFormat();
      file.createFile('DesignThinking/' + project_name + '/' + d + 'define' + '.txt',define_statement_text);

			hideButtons();
			dispStep("block");

			currStep='d_complete';
		break;
		case 'd_complete':
			title = "Define Done";
			text = 	"You have now defined the problem! Only two more steps to go!";
			pic = "img/define.png";
			buttonText = "Next Step: Ideate";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Define (4/4): ");
			changeSubStepHeader("Step Complete ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "next_step_button_div");
			dispStep("block");

			currStep='i_start';
		break;
		case 'i_start':
			currStepNum = 3;
			stepName = 'ideate';
			counterColorStep(currStepNum);
			d_complete = true;

			title = "3. Ideate";
			text = 	"Now that you have defined the problem, it's time to come up with some solutions! ";
			pic = "img/ideate.png";
			buttonText = "Start!";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeButtonText(buttonText);
			//changeStepHeaderWheel(scc3, 'img/main/color-wheel/step3.png');
			changeStepHeaderWheel(scc3, 'img/main/wheel/step3.png');
			changeStepHeader("Ideate (1/5): ");
			changeSubStepHeader("Introduction ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "page_content_button_div");
			dispStep("block");

			currStep='i_tool1';
		break;
		case 'i_tool1':
			title = "Discover Solutions";
			text = 	"In this step, you will brainstorm as many solutions as you can for the problem within the time limit. There are no " +
					"wrong answers, so be as creative and as crazy as you can be! If you need some help try looking at the ideate tools.";
			pic = "img/ideate/sketch-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Ideate (2/5): ");
			changeSubStepHeader("Discover Solutions ");
			changeTimeLimitHeader("5:00");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('ideate-tool');			
			
			dispTool("block");

			currStep='i_feedback';
		break;
		case 'i_feedback':
			title = "Feedback";
			text = 	"Now that you've come up with a few solutions, it's time to get some feedback from " +
					"your user. Grab a pen and paper to take notes on how they feel about your solutions. " +
					"For the user: try to give some constructive criticisms! " +
					"Start the timer when you're ready!";
			pic = "img/ideate/feedback/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Ideate (3/5): ");
			changeSubStepHeader("Solutions Feedback ");
			changeTimeLimitHeader("4:00");
			toggleTimerOn();

			ez.hide("step_pic_div");
			ez.show("timer");

			hideButtons();

			currStep='i_revise';
		break;
		case 'i_revise':
			title = "Revise Solutions";
			text = 	"Now that you've gotten user feedback, it's time to revise your solution. " +
					"Pick one of your solution and use the feedback to enhance it " +
					"or combine it with other solutions.  " +
					"Grab a pen and paper and sketch it out. Start the timer when you're ready!";
			pic = "img/ideate/feedback-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Ideate (4/5): ");
			changeSubStepHeader("Revise Solution ");
			changeTimeLimitHeader("3:00");
			toggleTimerOn();
			ez.hide("step_pic_div");
			ez.show("timer");

			hideButtons();

			currStep='i_complete';
		break;
		case 'i_complete':
			title = "Ideate Done";
			text = 	"You have now come up with a great solution! Let's see what's next...";
			pic = "img/ideate.png";
			buttonText = "Next Step: Prototype";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Ideate (5/5): ");
			changeSubStepHeader("Step Complete ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "next_step_button_div");
			dispStep("block");

			currStep='p_start';
		break;
		case 'p_start':
			currStepNum = 4;
			stepName = 'prototype';
			counterColorStep(currStepNum);
			i_complete = true;

			title = "4. Prototype";
			text = 	"The only way to do it is to do it! ";
			pic = "img/prototype.png";
			buttonText = "Start!";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeButtonText(buttonText);
			//changeStepHeaderWheel(scc4, 'img/main/color-wheel/step4.png');
			changeStepHeaderWheel(scc4, 'img/main/wheel/step4.png');
			changeStepHeader("Prototype (1/3): ");
			changeSubStepHeader("Introduction ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "page_content_button_div");
			dispStep("block");

			currStep='p_tool1';
		break;
		case 'p_tool1':
			title = "Build";
			text = 	"Gather your materials and create your prototype! Don't worry if you don't have a full workshop prepared to make the prototype. The prototype can be a symbol or even a drawing of your idea.";
			pic = "img/prototype/build/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Prototype (2/3): ");
			changeSubStepHeader("Time to Build ");
			changeTimeLimitHeader("10:00");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('prototype-tool');			
			dispTool("block");

			currStep='p_complete';
		break;
		case 'p_complete':
			title = "Prototype Done";
			text = 	"Congrats on building your prototype! Only one step left, so let's move on!";
			pic = "img/prototype/build-animation/1.png";
			buttonText = "Next Step: Test";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Prototype (3/3): ");
			changeSubStepHeader("Step Complete ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "next_step_button_div");
			dispStep("block");

			currStep='t_start';
		break;
		case 't_start':
			currStepNum = 5;
			stepName = 'test';
			counterColorStep(currStepNum);
			p_complete = true;

			title = "5. Test";
			text = 	"Give your user the full experience! " +
					"Allow them to test out your product. " +
					"Be sure to provide them with your vision if you couldn't fully build it. ";
			pic = "img/test.png";
			buttonText = "Start!";
			changeButtonText(buttonText);
			changeTitle(title);
			changeText(text);
			changePic(pic);
			//changeStepHeaderWheel(scc5, 'img/main/main-wheel/step5.png');
			changeStepHeaderWheel(scc5, 'img/main/wheel/step5.png');
			changeStepHeader("Test (1/3): ");
			changeSubStepHeader("Introduction ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			changeClass("b_step_instr", "page_content_button_div");
			dispStep("block");

			currStep='t_tool1';
		break;
		case 't_tool1':
			title = "User Test Ride";
			text = 	"See if the Test tools can help you get essential feedback. ";
			pic = "img/test/solution-animation/1.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Test (2/3): ");
			changeSubStepHeader("User Feedback ");
			changeTimeLimitHeader("4:00");
			toggleTimerOn();

			hideButtons();
			hideAllTools();
			showClass('test-tool');
			dispTool("block");

			currStep='t_complete';
		break;
		case 't_complete':
			title = "Test Done";
			text = 	"You're now finished testing your product!";
			pic = "img/test.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);
			changeStepHeader("Test (3/3): ");
			changeSubStepHeader("Step Complete ");
			changeTimeLimitHeader(" ");
			toggleTimerOff();

			hideButtons();
			dispStep("block");

			currStep='end';
		break;
		case 'end':
			t_complete = true;

			title = "Congratulations!";
			text = 	"Hope you came up with some great solutions! "+
					"You will be able to review your process from the \'Open Project\' menu button at the main menu.";
			pic = "img/main/dennis.png";
			changeTitle(title);
			changeText(text);
			changePic(pic);

			hideButtons();
			dispEnd("block");

			currStep='start';
		break;



		default:
	}

}

// after clicking on the vid/voice record button from instruction page
function showRec(){
	ez.show("step_instr");
  text = "You can choose to use either video recording or voice recording to record your interview process.";
  changeText(text);
	ez.show("vid_voice_rec");

	hideButtons();
	dispVid("block");
	dispVoice("block");
	dispQuest2("block");
}
// after clicking on the voice record button on vid/voice page
function showVoiceRec(){
  ez.hide('step_instr');
  ez.hide('step_pic');
	ez.show("voice_rec");
	hideButtons();
	dispQuest2("block");
}
// after clicking on start voice record button
function startVoiceRec(){
	recording_voice = true;
	allow_voice_rec = false;
	ez.get_ele("start_voice_rec").style.backgroundColor = "gray";
	ez.get_ele("start_voice_rec_word").innerHTML = "<h3>" + record_time_limit + " secs</h3>";

	// after time is up, go to next instruction
	hideButtons();
	recordAudio();
}

// after clicking on the vid record button on vid/voice page
function showVidRec(){
  ez.hide('step_instr');
  ez.hide('step_pic');
  ez.show("vid_rec");
  hideButtons();
  dispQuest2("block");
}
// after clicking on start voice record button
function startVidRec(){
	//recording_voice = true;
	allow_vid_rec = false;
	ez.get_ele("start_vid_rec").style.backgroundColor = "gray";

	// after time is up, go to next instruction
	hideButtons();
	captureVideo();
	dispTimeUp("block");
}

// after clicking on the toolbox button from instruction page
function showToolbox(){
	ez.hide("step_instr");
	ez.show("tool_box");

	hideButtons();
	// after tool is done being used, take a picture
	dispToolDone("block");
}

// show the photo capture div
function showPhotoCapture(){
	ez.hide("step_instr");
	ez.hide("tool_box");
	ez.show("photo_capture");
	ez.show("pic_page");

	hideButtons();
	changeTimeLimitHeader(" ");
	toggleTimerOff();
	dispTakePic("block");
	// change to instructions page
	dispPicNextStep("block");
}

// after clicking on the timer button
function startTimer(){
	timer_on = true;
	allow_timer = false;
	ez.get_ele("start_timer").style.backgroundColor = "gray";
	ez.get_ele("start_timer_word").innerHTML = "<h3>" + record_time_limit + " secs</h3>";
	// after time is up
	hideButtons();
	startTimerCount(record_time_limit);
}

// shows explanation of the application
ez.c('whatis_button', function(event) {
  ez.show('overlay_whatis_container');
});
ez.c('whatis_button_close', function(event) {
  ez.hide('overlay_whatis_container');
});

// what to do at the end of everything
function restartHome(){
	currStep = 0;
	counterColorStep(currStep);
	hideButtons();
	ez.hide("step_one_page");
	ez.hide("step_instr");
  ez.hide('top_bar');
	ez.show("startup");
  ez.get_ele('circle-one').style.backgroundColor = '#848484';
  ez.get_ele('bar-one').style.borderColor = 'white';
  ez.get_ele('circle-two').style.backgroundColor = '#848484';
  ez.get_ele('bar-two').style.borderColor = 'white';
  ez.get_ele('circle-three').style.backgroundColor = '#848484';
  ez.get_ele('bar-three').style.borderColor = 'white';
  ez.get_ele('circle-four').style.backgroundColor = '#848484';
  ez.get_ele('bar-four').style.borderColor = 'white';
  ez.get_ele('circle-five').style.backgroundColor = '#848484';
}
