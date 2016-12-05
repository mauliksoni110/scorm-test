$(document).ready(function() {

	$('.openCourse').click(function() {
		$('body').append('<iframe src="/course/index.html"></iframe>');
	});

	$('.openEdAppCourse').click(function() {
		$('body').append('<iframe class="edapp-frame" src="/edapp-course/index.html" height="600" width="600"></iframe>');
	});

});