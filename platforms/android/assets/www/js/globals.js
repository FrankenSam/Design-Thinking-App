//Strings
var project_name = '';
var selectedproject = '';
var file_contents = '';
var project_path = '';

//Summary
var summary_files = [];
var summary_index = 0;
var done_reading = false;
var currstep = '';
var prevstep = '';

var file_num = 0;

//Objects
var stepcount = document.createElement("h2");
var define_statement = document.createElement("p");

// Controls
var currStep = 'start';
var currStepNum = 0;
var stepName = 'empathy';
var e_complete = false;
var d_complete = false;
var i_complete = false;
var p_complete = false;
var t_complete = false;
var recording_voice = false;
var allow_voice_rec = true;
var allow_vid_rec = true;
var timer_on = false;
var allow_timer = true;
var record_time_limit = 1;	// seconds

// Animation
var reset = false;

// Step Counter Colors
var scc0 = "rgb(239,239,239)";
var scc1 = "rgb(91,192,216)";
var scc2 = "rgb(70,181,104)";
var scc3 = "rgb(237,201,58)";
var scc4 = "rgb(225,145,90)";
var scc5 = "rgb(181,70,70)";

var original_toolbox_content = "Empathy Map\n" +
						"Get to know your user!\n" + "empathy-tool\n" +
						"Needs/Insights\n" +
						"Discover what your user really wants.\n" + "define-tool\n" +
						"Free Draw\n" +
						"Draw out at least five solutions.\n" + "ideate-tool\n" +
						"Build Tips\n" +
						"See if you can use these materials to build.\n" + "prototype-tool\n" +
						"Feedback Grid\n" +
						"Think like an anthropologist, not a salesperson.\n" + "test-tool";
