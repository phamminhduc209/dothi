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

    /*  Collapse */
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function (a) {
        $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function (a) {
        $(a.target).prev('.panel-heading').removeClass('active');
    });


    setTimeout(function(){
        // Adv
        $(function() {
            var width_screen = $(window).width();
            var Advscroll_left = $('#advLeft');
            var Advscroll_right = $('#advRight');

            var header = $(".header").height();
            var nav = $("#mainNav").height();
            var slide_home = $(".block-slider-home").height();
            var block_search = $(".block-search").height();
            var abc = $("#site-main .container").width();

            var Top1 = header + nav + slide_home + block_search + 28;
            var Top2 = header + nav + 10;
            var position = ((width_screen - abc)/2) - 117;

            var Top = $(".main").offset().top;
            var Top_end  = $(".main").offset().top + $(".main").height();

            if($(".page_home")){
                Advscroll_left.css({
                    "top": Top1,
                    "left":  position,
                });
                Advscroll_right.css({
                    "top": Top1,
                    "right":  position,
                });
            }else{
                Advscroll_left.css({
                    "top": Top2,
                    "left":  position,
                });
                Advscroll_right.css({
                    "top": Top2,
                    "right":  position,
                });
            }

            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= Top1) {
                    Advscroll_left.css({
                        "top": "45px",
                        "left":  position,
                    });
                    Advscroll_right.css({
                        "top": "45px",
                        "right":  position,
                    });
                }else{
                    if($(".page_home")){
                        Advscroll_left.css({
                            "top": Top1 - scroll,
                            "left":  position,
                        });
                        Advscroll_right.css({
                            "top": Top1 - scroll,
                            "right":  position,
                        });
                    }else{
                        Advscroll_left.css({
                            "top": Top2 - scroll,
                            "left":  position,
                        });
                        Advscroll_right.css({
                            "top": Top2 - scroll,
                            "right":  position,
                        });
                    }
                }
            });
        });
    }, 5000); 

})(jQuery); // End of use strict