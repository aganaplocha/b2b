$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.login-close-icon').click(function () {
		$('.login-overlay').fadeOut();
	});
	
	$('.user-info').click(function () {
		$('.login-overlay').fadeIn();
	});
	

	$('#langPicker').click(function(){
		console.log("clicked!");
		$('.lang-dropdown').slideToggle();
	});
	
	$('ul.color-options li').click(function(){
		$(this).toggleClass('active');
	});
	
	$('ul.size-options li').click(function(){
		$(this).toggleClass('active');
	});
});

