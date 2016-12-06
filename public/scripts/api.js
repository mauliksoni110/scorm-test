var API = {};
var data = {};
var flagFinished = false;
var flagInitialized = false;
SCORM.errorCode = '0';

API.LMSInitialize = function(input) {
	console.log('LMSInitialize::', input);

	// API.LMSSetValue('cmi.core.student_id','123');
	// API.LMSSetValue('cmi.core.student_name','Sohil');
	// API.LMSSetValue('cmi.core._children','student_id,student_name');

	// already initialized or already finished
  if ((flagInitialized) || (flagFinished)) {
    return false;
  }

  // set initialization flag
  flagInitialized = true;

  // return success value
  return true;
}

API.LMSFinish = function (input) {
	console.log('LMSTerminate::', input);

// 	If cmi.core.exit has already been set to ‘suspend’ when the course exits, then cmi.core.entry should be set to ‘resume’.
// In all other cases, cmi.core.entry should be set to ” (an empty string).
	// not initialized or already finished
  if ((! flagInitialized) || (flagFinished)) {
    return false;
  }

  // set finish flag
  flagFinished = true;

  // return to calling program
  return true;
}

API.LMSGetValue = function(key) {
	console.log('LMSGetValue::', key)
	if((!flagInitialized) || (flagFinished)) {
		SCORM.errorCode = '301';
		return '';
	}

	if (!SCORM.isSupported(key)) {
		SCORM.errorCode = '401';
		return '';
	}

  if (!SCORM.dataElementRead) {
		SCORM.errorCode = '404';
		return '';
	}

	SCORM.errorCode = '0';
	return data[key] || 'default string';
}

API.LMSSetValue = function(key, val) {
	console.log("LMSSetValue::"+ key + "=" + val);
	if((!flagInitialized) || (flagFinished)) {
		SCOM.errorCode = '301';
		return '';
	}

	if (!SCORM.isSupported(key)) {
		SCORM.errorCode = '401';
		return false;
	}

 	if (!SCORM.dataElementRead) {
			SCORM.errorCode = '403';
			return false;
	}

	data[key] = val;
	SCORM.errorCode = '0';
	return true;
}


API.LMSCommit = function(commitInput) {
	console.log('LMSCommit::', commitInput);
	return true;
}

API.LMSGetLastError = function() {
	console.log('LMSGetLastError::', SCORM.errorCode);
  return SCORM.errorCode;
}


API.LMSGetErrorString = function(errorCode) {
	console.log("LMSGetLastErrorString::", SCORM.errorCode);
	return SCORM.errorMessages[errorCode];
}

API.LMSGetDiagnostics = function(errorCode) {
	console.log("LMSGetDiagnostics::", errorCode);
	return SCORM.errorMessages[errorCode];
}


