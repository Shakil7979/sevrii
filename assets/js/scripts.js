$(document).ready(function(){
	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu').slideToggle();

		return false
	});

	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});
	

	$('.search_carousel').owlCarousel({
		items: 11,
		loop:true,
		margin:14,
		dots: false,
		nav:true,
		autoplay:false,
		navText: ["","<img src='assets/images/search/arrow.png'>"] 
	});

	 
	$('.ideal_carousel').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		margin:20,
		autoplay:true, 
	});
 




});