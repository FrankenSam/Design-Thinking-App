function startTimerCount(timeLimit){
    var recTime = 0;
    var recInterval = setInterval(function() {
		recTime = recTime + 1;
		picAnimationDino1(recTime, "timer_pic");
		setTimerPosition("<h3>" + (record_time_limit - recTime) + " secs</h3>");

        if (recTime >= timeLimit) {
                clearInterval(recInterval);
				onStopTimer();
        }

    }, 1000);

}


function setTimerPosition(position) {
    document.getElementById('start_timer_word').innerHTML = position;
}

function onStopTimer(){
	timer_on = false;
	alert("Time's Up!");
	dispTimerDone("block");
}
