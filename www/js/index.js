/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        file.createDir("DesignThinking");
		file.createDir("DesignThinking/Toolbox");
		file.createDir("DesignThinking/Toolbox/txt");
		file.createFile("DesignThinking/Toolbox/txt/toolbox_content.txt", original_toolbox_content);
		toolbox.toolbox_files("DesignThinking/Toolbox/txt/toolbox_content.txt");

		//file.summary_Txt("DesignThinking/Toolbox/txt/toolbox_content.txt");

        //Get folder names and display them onto the div with id "start_screen"
        document.getElementById("open_project").addEventListener("click", function(event) {
          file.getProjects("DesignThinking");
          ez.show("project_selection");
        });


        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


app.initialize();

function clrForm() {ez.get_ele('project_name_text_form').value = '';}
ez.c('project_name_text_form', clrForm);
ez.c('project_name_text_form', function(event) {
  ez.get_ele('project_name_text_form').removeEventListener('click', clrForm);
});

function getDateFormat(){
	var datetime = new Date();

	var month = datetime.getMonth()+1;
	if (month < 10)
		month = "0"+month;
	else
		month=month.toString();
	var day = datetime.getDate();
	if (day < 10)
		day = "0"+day;
	else
		day=day.toString();
	var year = datetime.getFullYear();

	var hour = datetime.getHours();
	if (hour < 10)
		hour = "0"+hour;
	else
		hour = hour.toString();

	var min = datetime.getMinutes();
	if (min < 10)
		min = "0"+min;
	else
		min = min.toString();

	var sec = datetime.getSeconds();
	if (sec < 10)
		sec = "0"+sec;
	else
		sec = sec.toString();

	var dateTimeString = month+day+year+hour+min+sec;

	return dateTimeString;
}

function picAnimationDino1(recTime, Id){
	/*if (recTime % 4 == 0){
		ez.get_ele(Id).src = "img/clk1.png";
	}
	else if (recTime % 4 == 1){
		ez.get_ele(Id).src = "img/clk2.png";
	}
	else if (recTime % 4 == 2){
		ez.get_ele(Id).src = "img/clk3.png";
	}
	else {
	ez.get_ele(Id).src = "img/clk2.png";
	}*/
	
	if (recTime % 4 == 0){
		ez.get_ele(Id).src = "img/misc-animations/dance-animation/1.png";
	}
	else if (recTime % 4 == 1){
		ez.get_ele(Id).src = "img/misc-animations/dance-animation/2.png";
	}
	else if (recTime % 4 == 2){
		ez.get_ele(Id).src = "img/misc-animations/dance-animation/3.png";
	}
	else {
	ez.get_ele(Id).src = "img/misc-animations/dance-animation/4.png";
	}
}
