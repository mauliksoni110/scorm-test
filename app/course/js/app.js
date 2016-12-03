var scorm = pipwerks.SCORM;  //Shortcut
var lmsConnected = false;

function handleError(msg){
   console.log(msg);
}

function initCourse() {
 lmsConnected = scorm.init();
 if(lmsConnected){
   var completionstatus = scorm.get("cmi.core.lesson_status");
   if(completionstatus === "completed" || completionstatus === "passed")
     {
       handleError("You have already completed this course. You do not need to continue.");
     }

 // var learnerName = scorm.get("cmi.core.student_name");
 // if(learnerName){
 //     $('.leanerName').text('Sohil')
 // }
 }
 else{
   handleError("ERROR: Course could not connetct with the LMS")
 }
 // console.log("Suspend Data", scorm.get("cmi.suspend_data"))
}


$(window).load(function(){
  initCourse();

  $('.passButton').click(function() {
    scorm.set("cmi.core.lesson_status", "completed");
    // scorm.set("cmi.core.score.raw", 36);
    scorm.data.set('cmi.completion_status','completed');
    scorm.set("cmi.core.exit", "logout");
    // scorm.save();
  });

  $('.failButton').click(function() {
    // console.log('Lesson Status::', scorm.get("cmi.core.lesson_status"));
    scorm.set("cmi.core.lesson_status", "failed");
    scorm.set("cmi.core.score.raw", 10);
    scorm.data.set('cmi.completion_status','incomplete');
    // scorm.set("cmi.core.exit", "logout");
    // scorm.save();
    // scorm.quit();
  });
});
