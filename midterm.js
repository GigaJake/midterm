
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
	test--;
	var test2 = 60-parseInt(currentMinutes);
	/*if(test == 1 && test2 !=60)
	{
		test = 0;
	}*/
	test3 = 60-parseInt(currentSeconds)

	test = (test < 10 ? "0" : "") + test;
	test2 = (test2 < 10 ? "0" : "") + test2;
	test3 = (test3 < 10 ? "0" : "") + test3;




	document.getElementById('answer').innerHTML = test + ":" + test2 + ":" + test3 + " hours of sleep!";
}
