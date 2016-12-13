

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

   case 'cmi.launch_data':
   	 $varvalue = 'credit';
   	 break;

   case 'cmi.core.lesson_status':
   	 $varvalue = 'not_attempted';
   	 break;

   case 'cmi.core.entry':
   	 $varvalue = 'ab_initio';
   	 break;

   case 'cmi.core.total_time':
   	 $varvalue = '0000:00:00';
   	 break;

   default:
     $varvalue = '';

 }

 return $varvalue;
}

