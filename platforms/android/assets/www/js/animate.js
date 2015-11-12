/* Class for each animated picture series */
var Animation = function(step, name, id, blink, numPics) {
	return {
		step: this.step, // Which step of the DT process?
		name: this.name, // Name of animation (in the folder)
		blink: this.blink, // Is it blinking? Other?
		id: this.id,
		numPics: this.numPics, // Number of pictures in sequence
		interval: null,
		//isAnimated: false;
		getSrc: function(picNum) {
			return "../www/img/" + step + "/" + name + "-animation/" + picNum + ".png";
		}, // Get the source of the image
		display: function(picNum) {
			if(!picNum){ picNum = 1; } // Display first image by default
			
			//document.getElementsByClassName("stepPic").innerHTML = "<img id='" + id + "' src='" + this.getSrc(picNum) + "' />";
			document.getElementById(id).src = this.getSrc(picNum);
		}, // Show image
		preload: function() {
			var sequence = [];
			
			if (document.images) {
				for(i = 0; i < numPics; i++) {
					sequence.push(new Image());
					sequence[i].src = this.getSrc(i + 1); 
				}
			}
		}, // Preload images to prevent flickering
		animate: function() {
			var self = this;
			//isAnimated = true;
		
			if(blink) {
				setInterval(function() { self.display(2); }, 1250);
				setInterval(function() { self.display(1); }, 500);
			} // For blink animations
			else{
				var self = this;
				var num = numPics + 1;
				var i = 1;
				
				interval = setInterval(function() {
					if(i == num) {
						i = 1;
					}
					
					self.display(i);
					
					i++;
				}, 200);
			} // For other animations
		}, // Animate the sequence
		stop: function() {
			clearInterval(interval);
		} // Stop animation
	}
}

/* Store all of the images and data into respective arrays */
var empAnimation = [
	Animation("empathy", "interview", true, 2) // 0
];
var defAnimation = [
	Animation("define", "identify", true, 2) // 0
];
var ideaAnimation = [
	Animation("ideate", "sketch", "voice_rec_timer_pic", true, 2), // 0
	Animation("ideate", "feedback", true, 2) // 1
];
var protoAnimation = [
	Animation("prototype", "build", false, 4) // 0
];
var testAnimation = [
	Animation("test", "solution", false, 4) // 0
];
var miscAnimation = [
	Animation("misc-animations", "dance", "voice_rec_timer_pic", false, 8), // 0
	Animation("misc-animations", "talking-front", "voice_rec_timer_pic", false, 5), // 1
	Animation("misc-animations", "talking-side", false, 5), // 2
	Animation("misc-animations", "talking-side", false, 5), // 3
	Animation("misc-animations", "think", true, 2), // 4
	Animation("misc-animations", "times-up", "voice_rec_timer_pic", true, 2) // 5
];

/*protoAnimation[0].display();
protoAnimation[0].preload();
protoAnimation[0].animate();*/