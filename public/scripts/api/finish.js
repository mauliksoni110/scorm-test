API.LMSFinish = function (input) {
	console.log('LMSTerminate::', input);
	if ((!flagInitialized) || (flagFinished)) {
    return false;
  }
  var lessonstatus = API.LMSGetValue('cmi.core.lesson_status');

  if (lessonstatus == 'not_attempted') {
		API.LMSSetValue_F('cmi.core.lesson_status','completed');
	}

	API.LMSSetValue_F('cmi.core.entry','');

	var exit = API.LMSGetValue_F('cmi.core.exit');
	if (exit == 'suspend') {
    API.LMSSetValue_F('cmi.core.entry','resume');
	}
	else {
    API.LMSSetValue_F('cmi.core.entry','');
	}

	// read cmi.core.total_time from the 'scormvars' table
	var totalTime = API.LMSGetValue_F('cmi.core.total_time');

	// convert total time to seconds
	var time = totalTime.split(':');
	var totalSeconds = time[0]*60*60 + time[1]*60 + time[2];

	// read the last-set cmi.core.session_time from the 'scormvars' table
	var sessionTime = API.LMSGetValue_F('cmi.core.session_time');

	// no session time set by SCO - set to zero
	if (!sessionTime) {
	    sessionTime = '0000:00:00';
	}

	// convert session time to seconds
	time = sessionTime.split(':');
	var sessionSeconds = time[0]*60*60 + time[1]*60 + time[2];

	// new total time is ...
	totalSeconds += sessionSeconds;

	// break total time into hours, minutes and seconds
	var totalHours = parseInt(totalSeconds / 3600);
	totalSeconds -= totalHours * 3600;
	var totalMinutes = parseInt(totalSeconds / 60);
	totalSeconds -= totalMinutes * 60;

	// save new total time to the 'scormvars' table
	API.LMSSetValue_F('cmi.core.total_time',totalHours+':'+totalMinutes+':'+totalSeconds);

	//delete the last session time
	API.LMSSetValue_F('cmi.core.session_time','0000:00:00.00');


	API.LMSCommit('');
	flagFinished = true;
	data = {};
	return true;
}