var API = {};
var data = {};
var flagFinished = false;
var flagInitialized = false;
var errorCode = '0';

var errorMessages = new Object();
errorMessages['0'] = 'No Error';
errorMessages['101'] = 'General Exception';
errorMessages['201'] = 'Invalid Argument';
errorMessages['202'] = 'Element Cannot Have Children';
errorMessages['203'] = 'Element Not an Array - Cannot Have Children';
errorMessages['301'] = 'API Not Initialized';
errorMessages['401'] = 'Data Model Element Not Implemented';
errorMessages['402'] = 'Invalid Set Value - Element is a Keyword';
errorMessages['403'] = 'Invalid Set Value - Element is Read Only';
errorMessages['404'] = 'Invalid Get Value - Element is Write Only';
errorMessages['405'] = 'Invalid Set Value - Incorrect Data Type';


API.LMSInitialize = function(input) {
	console.log('LMSInitialize::', input);
	flagInitialized = true;
	return true;
}

API.LMSFinish = function (input) {
	console.log('LMSTerminate::', input);
	flagFinished = true;
	return true;
}

API.LMSGetValue = function(key) {
	console.log('LMSGetValue::', key)
	if((!flagInitialized) || (flagFinished)) {
		errorCode = '301';
		return '';
	}

	errorCode = '0';
	return data[key] || 'default string';
}

API.LMSSetValue = function(key, val) {
	console.log("LMSSetValue::"+ key + "=" + val);
	if((!flagInitialized) || (flagFinished)) {
		errorCode = '301';
		return '';
	}

	data[key] = val;
	errorCode = '0';
	return true;
}


API.LMSCommit = function(commitInput) {
	console.log('LMSCommit::', commitInput);
	return true;
}

API.LMSGetLastError = function() {
	console.log('LMSGetLastError::', errorCode);
  return errorCode;
}


API.LMSGetErrorString = function(errorCode) {
	console.log("LMSGetLastErrorString::", errorCode);
	return errorMessages[errorCode];
}

API.LMSGetDiagnostics = function(errorCode) {
	console.log("LMSGetDiagnostics::", errorCode);
	return errorMessages[errorCode];
}