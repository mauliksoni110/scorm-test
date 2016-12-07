var API = {};
var data = {};
var flagFinished = false;
var flagInitialized = false;
SCORM.errorCode = '0';


API.LMSGetValue_F = function(key) {
	return data[key];
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


API.LMSSetValue_F = function(key,val) {
	data[key] = val;
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
	if ((! flagInitialized) || (flagFinished)) { return false; }
	// graphql mutation
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


