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

// Adv scroll top
$(document).ready(function() {
    if ($("#advLeft").show(), $("#advRight").show(), l = ".banner_scroll .item", l.length > 0) {
        var r = 1e3,
            o = $("#advLeft .banner_scroll").width(),
            a = $("#advRight .banner_scroll").width(),
            v = ($(document).width() - r) / 2 + r,
            e = ($(document).width() - r) / 2 - o;
        $(window).scroll(function() {
            h()
        });
        $(window).resize(function() {
            h()
        });

        function h() {
            if ($(document.body).width() < r + o + a) {
                $(".banner_scroll").css("display", "none");
                return
            }
            $(".banner_scroll").css("display", "block");
            v = ($(document.body).width() - 0 - r) / 2 + r + 10;
            e = o == null ? ($(document.body).width() - 0 - r) / 2 - a - 10 : ($(document.body).width() - 0 - r) / 2 - o - 10;
            var f = 0,
                n = $(window).scrollTop(),
                u = window.location.pathname != "/" ? 160 : 460,
                t = 0,
                i = $(".footer").position().top - $(".banner_scroll").height() - 6;
            t = n < u ? u - n : n >= i ? 246 : 0;
            $("#advLeft .banner_scroll .item").length != 0 && (n >= i ? $("#advLeft .banner_scroll").css({
                position: "fixed",
                bottom: t,
                top: "",
                left: e
            }) : $("#advLeft .banner_scroll").css({
                position: "fixed",
                top: t + 43,
                bottom: "",
                left: e
            }));
            $("#advRight .banner_scroll .item").length != 0 && (n >= i ? $("#advRight .banner_scroll").css({
                position: "fixed",
                bottom: t,
                top: "",
                right: e
            }) : $("#advRight .banner_scroll").css({
                position: "fixed",
                top: t + 43,
                bottom: "",
                right: e
            }));
            f = n
        }
        h()
    }
});