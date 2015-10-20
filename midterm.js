
function updateTime()
{
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	var timeOfDay = (currentHours < 12) ? "AM" : "PM";

	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
	currentHours = (currentHours > 12) ? currentHours-12 : currentHours;
	currentHours = (currentHours == 0) ? 12 : currentHours;

	var time = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

	document.getElementById('clock').firstChild.nodeValue = "Current Time: " + time;

	var alarmHour = $('#hour').val();
	var ampm = $('#ampm').val();

	alarmHour = parseInt(alarmHour)+parseInt(ampm);

	currentHours = currentTime.getHours();
	var test;
	if(parseInt(alarmHour) > parseInt(currentHours))
	{
		test = parseInt(alarmHour)-parseInt(currentHours);
	}
	else
	{
		test = 24-parseInt(currentHours)+parseInt(alarmHour);
	}
	//var remainingHours = Math.abs(parseInt()-parseInt(currentHours));


	document.getElementById('answer').innerHTML = test;
}
