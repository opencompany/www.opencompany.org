$(window).load(function(){

	"use strict";

	// Button Heights and Widths
	
	$('.btn-wrapper').each(function(){
	
		var btnHeight = $(this).children('.btn').outerHeight() + 4;
		var btnWidth = $(this).children('.btn').outerWidth() + 4;
		
		$(this).css('height', btnHeight);
		$(this).css('width', btnWidth);
	
	});


});

$(document).ready(function(){

	"use strict";

	// Smooth Scrolling
	
	$('.scroll').smoothScroll({
        offset: -70,
        speed: 800
    });
    
    // Mobile Menu Toggle
    
    $('.open-menu').click(function(){
    
    	if($('#nav').hasClass('open-nav')){
    		$('#nav').removeClass('open-nav');
    	}else{
    		$('#nav').addClass('open-nav');
    	}
    
    });

	// Initialize Sliders

	$('#home-slider').flexslider({ controlNav: false });
	
	// Service Clicks
	
	$('.service').click(function(){
	
		if($(this).hasClass('open-service')){
			$(this).removeClass('open-service');
		}else{
			$(this).addClass('open-service');
		}
	
	});
	
	// Open & Close Projects
	
	$('.work-overlay').click(function(){
	
		$('.project').removeClass('open-project');
	
		var projectID = '#' + $(this).parent().parent().attr('data-project-id');
		var slideShowID = projectID + '-slideshow';
		
		if(!$(this).parent().parent().hasClass('open-project')){
			$(projectID).addClass('open-project');
			$(slideShowID).flexslider({ controlNav: false });
			
		}
		
		
		
		$('html,body').animate({
		scrollTop: $(projectID).offset().top
		}, 800);
		
	
	});
	
	$('.close-project').click(function(){
	
		$(this).closest('.project').removeClass('open-project');
		
		$('html,body').animate({
		scrollTop: $('#work-nav').offset().top - 90
		}, 800);
	
	});
	
	// Map Toggle
	
	$('#map-toggle').click(function(){
	
		if($('#contact-holder').hasClass('contact-fade')){
			$('#contact-holder').removeClass('contact-fade');
		}else{
			$('#contact-holder').addClass('contact-fade');
		}
	
	});
	
	
	// Contact Form Code
	
	$('#contact-form .btn-wrapper').click(function(){
	
		var name = $('#form-name').val();
		var email = $('#form-email').val();
		var message = $('#form-message').val();
		var error = 0;
		
		if(name === '' || email === '' || message === ''){
			error = 1;
			$('#details-error').fadeIn(200);
		}else{
			$('#details-error').fadeOut(200);
		}
		
		if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
			$('#details-error').fadeIn(200);
			error = 1;
		}
		
		 var dataString = 'name=' + name + '&email=' + email + '&text=' + message;

            if (error === 0) {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: dataString,
                    success: function () {
                        $('#details-error').fadeOut(1000);
                        $('#form-sent').fadeIn(1000);
                    }
                });
                return false;
            }
	
	});
	
	


});