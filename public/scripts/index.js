$(document).ready(function() {

	$('.openCourse').click(function() {
		$('body').append('<iframe src="/course/index.html"></iframe>');
	});
});