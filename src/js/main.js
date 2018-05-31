/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */

$(function(){
    /* ========================================================================= */
    /*  Menu item highlighting
    /* ========================================================================= */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
           // jQuery("#navigation").css("background-color","#1f2021");
            jQuery("#navigation").addClass("animated-nav");
            jQuery("body").addClass("small-nav");
        } else {
           // jQuery("#navigation").css("background-color","#1f2021");
            jQuery("#navigation").removeClass("animated-nav");
            jQuery("body").removeClass("small-nav");
        }
    });


	

			/*var contactForm = $('.contact-form').clone().addClass('additional-contact-form');
	//$(contactForm).insertAfter( "#navigation" );
	$(contactForm).insertBefore("#wrapper-all");
	$(contactForm).prepend('<i class="fa fa-times contact-form-close" aria-hidden="true"></i>');
	$(contactForm).wrap('<div id="additional-contact"></div>');
	$('<div id="additional-mask"></div>').insertBefore("#wrapper-all");
	*/
	$('#request-callback').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('request-active');
		
	});
		$('.contact-form-close').on('click', function(e) {
		
		$('body').removeClass('request-active');
		
	});
	

	
	
	
		var buttonMobile2 = $('#navigation .navbar-toggle').clone().addClass('additional-mobile-button');
		var menuMobile2 = $('#navigation .navigation.navbar-collapse').clone().addClass('additional-mobile-menu');
	//$(contactForm).insertAfter( "#navigation" );
	$(buttonMobile2).insertBefore("#wrapper-all").addClass('mobile-menu-button').attr('data-target','');
	$(menuMobile2).removeClass('collapse');
	
	$(menuMobile2).insertBefore("#wrapper-all").wrap('<div id="mobile-menu"></div>');

		$('.additional-mobile-button').on('click', function(e) {
		
		$('body').toggleClass('mobile-menu-active');
		
	});

	
	$('.additional-mobile-menu ul li.dropdown').each(function() {
		
		$(this).removeClass();
		
		});
		
		
		$('.additional-mobile-menu ul ul.dropdown-menu').removeClass();
		$('.additional-mobile-menu ul a.dropdown-toggle').remove();
		

		
	
	$('input[placeholder="*Your Name"]').attr('placeholder','*Name');
	$('input[placeholder="*Your Telephone Number"]').attr('placeholder','*Telephone Number');
	$('input[placeholder="*Your Email"]').attr('placeholder','*Email');
	$('textarea[placeholder="*Your Message"]').attr('placeholder','*Message');
	
	$('.additional-contact-form *').each(function() {
		
		$(this).removeClass('wow animated');
		
	});

	$('#navigation a').click(function() {
			
			//console.log('clicked');
			
			$('.navigation.collapse.in').removeClass('in').attr('aria-expanded', 'false');
			
		});
		

	
	
	
	
	
		
		
		

    $('#nav').onePageNav({
        filter: ':not(.external)',
        scrollSpeed: 950,
        scrollThreshold: 1
    });

    // Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });

    // portfolio filtering

    $("#projects").mixItUp();

    //fancybox

    $(".fancybox").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 650,

        closeEffect : 'elastic',
        closeSpeed  : 550,
    });



    /* ========================================================================= */
    /*  Facts count
    /* ========================================================================= */

    "use strict";
    $(".fact-item").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

    $("#testimonial").owlCarousel({
        pagination : true, // Show bullet pagination
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

});

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

   wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();

/* ---------------------------------------------------------------------- */
/*      Progress Bars
/* ---------------------------------------------------------------------- */

initProgress('.progress');

function initProgress(el){
    jQuery(el).each(function(){
        var pData = jQuery(this).data('progress');
        progress(pData,jQuery(this));
    });
}


            
function progress(percent, $element) {
    var progressBarWidth = 0;
    
    (function myLoop (i,max) {
        progressBarWidth = i * $element.width() / 100;
        setTimeout(function () {   
        $element.find('div').find('small').html(i+'%');
        $element.find('div').width(progressBarWidth);
        if (++i<=max) myLoop(i,max);     
        }, 10)
    })(0,percent);  
}   


