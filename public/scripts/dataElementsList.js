SCORM.dataElements = new Object();

SCORM.dataElements['cmi.core._children'] = 'RO';

SCORM.dataElements['cmi.core.student_id'] = 'RO';
SCORM.dataElements['cmi.core.student_name'] = 'RO';

SCORM.dataElements['cmi.core.lesson_location'] = 'RW';
SCORM.dataElements['cmi.core.credit'] = 'RO';
SCORM.dataElements['cmi.core.lesson_status'] = 'RW';
SCORM.dataElements['cmi.core.entry'] = 'RO';
SCORM.dataElements['cmi.core.exit'] = 'WO';

SCORM.dataElements['cmi.core.score._children'] = 'RO';
SCORM.dataElements['cmi.core.score.raw'] = 'RW';
SCORM.dataElements['cmi.core.score.max'] = 'RW';
SCORM.dataElements['cmi.core.score.min'] = 'RW';

SCORM.dataElements['cmi.core.total_time'] = 'RO';
SCORM.dataElements['cmi.core.session_time'] = 'WO';

SCORM.dataElements['cmi.suspend_data'] = 'RW';
SCORM.dataElements['cmi.launch_data'] = 'RO';

SCORM.dataElements['cmi.comments'] = 'RW';
SCORM.dataElements['cmi.comments_from_lms'] = 'RO';


// Data Elements Support Function
SCORM.isSupported = function(dataElementName) {

	// flags
	var dataElementSupported = false;
  SCORM.dataElementRead = false;
  SCORM.dataElementWrite = false;

  // if the data element is in the list of supported elements
  if (dataElementName in SCORM.dataElements) {
		rights = SCORM.dataElements[dataElementName];
    dataElementSupported = true;
		if ( (rights == 'RW') || (rights == 'RO') ) { SCORM.dataElementRead = true; }
    if ( (rights == 'RW') || (rights == 'WO') ) { SCORM.dataElementWrite = true; }
	}
	return dataElementSupported;
}

// SCORM.isReadable(dataElementName){

// }