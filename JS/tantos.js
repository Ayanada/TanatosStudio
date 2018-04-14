/*global $, alert, console*/

$(function () {
   
    'use strict';
    
// Change Header Height
    
    $('.upper-bar').height($(window).height());
    
    
      // Scroll To Features 
    
    $('.upper-bar .arrow i').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
        
    });
    
    $('.hire').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.team').offset().top
            
        }, 1000);
        
    });

// Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }
                
    }
    
    checkClients();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });

});