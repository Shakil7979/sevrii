$(document).ready(function(){
	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu').slideToggle(); 

		return false;
	});

	$('.mobile_bars').click(function(){
		$('.menu_bar_overlay').fadeIn();
		$('.header_mobile_menu').fadeIn();

		return false;
	});

	$('.menu_bar_overlay').click(function(){
		$('.menu_bar_overlay').fadeOut();
		$('.header_mobile_menu').fadeOut(); 
	});

	$('.filter_modal').click(function(){
		$('.search_filter_modal').show();
		$('.modal_overlay').show(); 
	});

	$('.modal_close').click(function(){
		$('.search_filter_modal').hide();
		$('.modal_overlay').hide(); 
	});

	$('.modal_overlay').click(function(){
		$('.search_filter_modal').hide();
		$('.modal_overlay').hide(); 
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

	$('.modal_carousel_main').owlCarousel({
		items: 5,
		loop:true,
		margin:14,
		dots: false,
		nav:true,
		autoplay:false,
		navText: ["","<img src='assets/images/search/arrow.png'>"] ,
		responsive:{
			0:{
			  items:3
			},
			450:{
				items: 3,
			},
			700:{
				items: 5,
			}
		  }
	});

	 
	$('.ideal_carousel').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		margin:20,
		// autoplay:true, 
		responsive:{
			0:{
				dots:false,
			  },
			  767:{
				dots:true,
			  }
			}
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