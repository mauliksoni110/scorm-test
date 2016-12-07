

SCORM.getValueFromLMS = function($varname) {
	var $varvalue = null;
	switch ($varname) {
	 case 'cmi.core.student_name':
     $varvalue = 'Addison, Steve';
     break;

   case 'cmi.core.student_id':
     $varvalue = '007';
     break;

   case 'adlcp:masteryscore':
     $varvalue = '90';
     break;

   case 'cmi.launch_data':
     $varvalue = '';
     break;

   default:
     $varvalue = '';

 }

 return $varvalue;
}

