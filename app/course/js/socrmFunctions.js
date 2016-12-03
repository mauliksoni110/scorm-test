// function handleError(msg){
//    console.log(msg);
//    //window.close();
// }

// function initCourse() {
// 	lmsConnected = scorm.init();
// 	if(lmsConnected){
// 		var completionstatus = scorm.get("cmi.core.lesson_status");
// 			if(completionstatus === "completed" || completionstatus === "passed")
// 			{
// 				handleError("You have already completed this course. You do not need to continue.");
// 			}

// 	var learnerName = scorm.get("cmi.core.student_name");
// 	if(learnerName){
// 			$('.leanerName').text(learnerName)
// 	}
// 	}
// 	else{
// 		handleError("ERROR: Course could not connetct with the LMS")
// 	}
// 	alert(scorm.get("cmi.suspend_data"))
// }