API.LMSInitialize = function(input) {
	console.log('LMSInitialize::', input);
	// already initialized or already finished
  if ((flagInitialized) || (flagFinished)) {
    return false;
  }

	API.LMSSetValue_F('cmi.core._children','student_id,student_name,lesson_location,credit,lesson_status,entry,exit,score,total_time,session_time,lesson_mode');
	API.LMSSetValue_F('cmi.core.score._children','raw');
	API.LMSSetValue_F('cmi.core.student_id',SCORM.getValueFromLMS('cmi.core.student_id'));
	API.LMSSetValue_F('cmi.core.student_name',SCORM.getValueFromLMS('cmi.core.student_name'));
	API.LMSSetValue_F('adlcp:masteryscore',SCORM.getValueFromLMS('adlcp:masteryscore'));
	API.LMSSetValue_F('cmi.launch_data',SCORM.getValueFromLMS('cmi.launch_data'));

	// / progress and completion tracking
	API.LMSSetValue_F('cmi.core.credit',SCORM.getValueFromLMS('cmi.core.credit'));
	API.LMSSetValue_F('cmi.core.lesson_status',SCORM.getValueFromLMS('cmi.core.lesson_status'));
	API.LMSSetValue_F('cmi.core.entry',SCORM.getValueFromLMS('cmi.core.entry'));

	// total seat time
	API.LMSSetValue_F('cmi.core.total_time',SCORM.getValueFromLMS('cmi.core.total_time'));

	// new session so clear pre-existing session time
	API.LMSSetValue_F('cmi.core.session_time','0000:00:00');

	flagInitialized = true;
	return true;
}