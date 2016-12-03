var API = {};
var data = {};

API.LMSInitialize = function() {
	return true;
}


API.LMSTerminate = function () {
	return false;
}

API.LMSGetValue = function(key) {

	return data[key] || 'default string';
}

API.LMSSetValue = function(key, val) {
	data[key] = val;
	return true;
}


API.LMSCommit = function() {

}

API.LMSGetLastError = function() {

}

API.LMSGetErrorString = function() {

}

API.LMSGetDiagnostics = function() {

}