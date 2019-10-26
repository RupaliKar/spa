(function($) {
'use strict';


$(document).ready(function(){

    /* Dashboard */
  $('#dash-modal-demo-button-1').click(function() {
    $("#dash-main-modal-1").addClass("dash-main-modal-show");
    $(".dash-main-modal-overlay-1").addClass("fadeIn");
  });

  $(".close-modal, .modal-close i").click(function(e) {
    e.preventDefault();
    $("#dash-main-modal-1").removeClass("dash-main-modal-show");
    $(".dash-main-modal-overlay-1").removeClass("fadeIn");
  });

  $('#dash-modal-demo-button-2').click(function() {
    $("#dash-main-modal-2").addClass("dash-main-modal-show");
    $(".dash-main-modal-overlay-2").addClass("fadeIn");
  });

  $(".close-modal, .modal-close i").click(function(e) {
    e.preventDefault();
    $("#dash-main-modal-2").removeClass("dash-main-modal-show");
    $(".dash-main-modal-overlay-2").removeClass("fadeIn");
  });
  
  $(".img-change").on("click",function() {    
    $(this).siblings().click();  
    return false;
  });


	/* Review */
  $(".freelancer-review").on("click", function(){
        $(".modal-overlay-2").addClass("fade-in");
        $(".modal-full-content-2").addClass("modal-show");
    });
  $(".modal-header span i").on("click", function() {
        $(".main-modal-overlay, .modal-overlay-2").removeClass("fade-in");
        $(".modal-full-content, .modal-full-content-2").removeClass("modal-show");
    });
  


	/* Reservation Page Tab */
      $(".tabs-select.re-tabs-select-1").addClass("tabs-select-active");
      $(".re-tabs-details-show-1").show().siblings().hide();
      $(".tabs-select").on("click", function() {
          var self = $(this);
          self.addClass(".tabs-select-active").siblings().removeClass("tabs-select-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });
    
	
      /* Booking Page Tab */
      $(".tabs-select.tabs-select-2").addClass("tabs-select-active");
      $(".tabs-details-show-2").show().siblings().hide();
      $(".tabs-select").on("click", function() {
          var self = $(this);
          self.addClass("tabs-select-active").siblings().removeClass("tabs-select-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });


	 $(".date-range").hide();
		$(".date-book").on("click", function() {
		  $(".date-range").toggle();
		  // $(".cat-view-more").siblings.hide();
		  
		});


         
        // HOME TWO NAVBAR
        $(".sub-menu").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
        $(".nav-list-item .navi-list").click(function(e) {
            e.preventDefault();
            var thisItem = $(this);

            if(thisItem.parent().hasClass("sel")) {
                thisItem.parent().find(".sub-menu").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out", "z-index": "100"});
                thisItem.parent(".nav-list-item.sel").removeClass("sel");
            }

            else {
                thisItem.parent().find(".sub-menu").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out", "pointer-events": "none"});
                thisItem.parent(".nav-list-item.sel").removeClass("sel");

                if(thisItem.next(".sub-menu").length) {
                    thisItem.parent().addClass("sel");
                    thisItem.next(".sub-menu").css({"transform": "scale(1)", "opacity": "1", "pointer-events": "all"});
                }
            }
        });
		
		
        $(document).mouseup(function(e){
            var body = $(".sub-menu");
            
            if(!body.is(e.body) && body.has(e.target).length === 0){
                body.css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
            }
        });

        $(document).mouseup(function(e){
            var selbody = $(".nav-list-item.sel");
            
            if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
                selbody.removeClass("sel");
            }
        });


     // MOBILE NAVBAR   
    $(".mbl-header-menu-area").hide();
    		$(".mobile-toggle").on("click", function() {
    			$(this).siblings(".mbl-header-menu-area").show();
    		});
    		$(".mobile_menu_close i").on("click", function() {
    			$(this).parent().parent(".mbl-header-menu-area").hide();
    		});

    	/* DropDown */
    	    $(".main-navbar li").click(function() {
            $(this).find("ul").toggleClass("dropdown-act");
        });
    	

	   /* Blog Page */
    $(".reply-form").hide();
    $(".comment-reply").on("click", function() {
      $(this).siblings(".reply-form").show();
    });
    $(".close-form i").on("click", function() {
      $(this).parent().parent(".reply-form").hide();
    });

  
		// Header Slider 
  $('.active-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
    	autoplayTimeout:4000,
    	transitionStyle : "fadeup",	
    	nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>',
		'<i class="fas fa-long-arrow-alt-right"></i>'],
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	  
  });
	
	/* Ityped */
    ityped.init(document.querySelector("#ityped"), {
        strings: ['spa.', 'hair salons.'],
        typeSpeed: 55,
          startDelay: 200,
          backSpeed: 20,
          backDelay: 1000,
          loop: true,
          cursorChar: "|",
          
      });
      ityped.init(document.querySelector("#ityped1"), {
        strings: ['spa.', 'hair salons.'],
        typeSpeed: 55,
          startDelay: 200,
          backSpeed: 20,
          backDelay: 1000,
          loop: true,
          cursorChar: "|",
          
      });


      $(".account-tabs-select.account-tabs-select-2").addClass("tabs-select-active");
      $(".tabs-details-show-2").show().siblings().hide();
      $(".account-tabs-select").on("click", function() {
          var self = $(this);
          self.addClass("tabs-select-active").siblings().removeClass("tabs-select-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });
   

	$(".mbl-header-menu-area").hide();
		$(".mobile-toggle").on("click", function() {
			$(this).siblings(".mbl-header-menu-area").show();
		});
		$(".mobile_menu_close i").on("click", function() {
			$(this).parent().parent(".mbl-header-menu-area").hide();
		});

		/* DropDown */
		$(".main-navbar li").click(function() {
			$(this).find("ul").toggleClass("dropdown-act");
		});	
});

$(window).load(function(){
    // Preloader
    $('.preloader').fadeOut('3000');
  });
})(jQuery);

/* Fixed Menu */
$(document).on('scroll', function() {
    var scrollPos = $(this).scrollTop();

    if( scrollPos > 10 ) {
        $('.header-area').addClass('navbar-home');
    }

    else {
        $('.header-area').removeClass('navbar-home');
    }
});



/*  $(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 300) {
      $('#menu').removeClass(  ).addClass( "menu_fixed" );
    } else  {
      $('.menu_fixed').removeClass(  ).addClass( "_13menu" );
    } 
    

  });

}); */
