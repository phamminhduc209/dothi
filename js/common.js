(function($){
  "use strict";
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 200) {
	  		$('#return-to-top').addClass('td-scroll-up-visible');
		} else {
	  		$('#return-to-top').removeClass('td-scroll-up-visible');
		}
	});
	$('#return-to-top').click(function() {
		$('body,html').animate({
	  		scrollTop : 0
		}, 'slow');
	});

	// Slide Carousel
  	$(document).ready(function() {
	    $(".owl-carousel").each(function(index, el) {
	      var config = $(this).data();
	      config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
	      config.smartSpeed="800";
	      if($(this).hasClass('owl-style2')){
	        config.animateOut="fadeOut";
	        config.animateIn="fadeIn";    
	      }
	      if($(this).hasClass('dotsData')){
	        config.dotsData="true";
	      }
	      $(this).owlCarousel(config);
	    });
	});

	/** Menu, Menu Mega Responsive **/
	$(document).ready(function(){
		$('.menu>ul>li.parent').append('<span class="plus"></span>');
		$('.menu ul li.parent .plus').click(function(){
			$(this).toggleClass('open').siblings('.submenu').slideToggle();
		});
	});

	/*  [ Main Menu ]
	- - - - - - - - - - - - - - - - - - - - */
	$(".navbar-toggle").on( 'click', function() {
		$(this).toggleClass('has-open');
		$("#main-menu .menu").toggleClass("has-open");
		$("body").toggleClass("menu-open");
	});

	// Input Page Post News
	$('#hplSell').click(function () {
        $('#hplSell').addClass('hplcate-active');
        $('#hplRent').removeClass('hplcate-active');
    });
    $('#hplRent').click(function () {
        $('#hplRent').addClass('hplcate-active');
        $('#hplSell').removeClass('hplcate-active');
    });

    /*  [ Sticky Menu ] */
  	$('.fix-header ').sticky({ topSpacing: 0 });


})(jQuery); // End of use strict