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
		navText: ["","<img src='assets/images/search/arrow.png'>"] ,
		responsive:{
			0:{
			  items:5
			},
			450:{
				items: 5,
			},
			700:{
				items: 11,
			}
		  }
	});

	 
	$('.ideal_carousel').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		margin:20,
		autoplay:true, 
	});
	$('.service_mobile_carousel').owlCarousel({
		items:1.5,
		loop:true,
		nav:false,
		dots:false,
		margin:20,
		autoplay:true, 
	});

	 
	$('.service_carousel_main').owlCarousel({
		items:3.9,
		loop:true,
		nav:false,
		dots:false,
		margin:20,
		autoplay:true, 
		responsive:{
			0:{
			  items:1.5
			}, 
			767:{
				items:3.9,
			}
		  }
	});
 




});