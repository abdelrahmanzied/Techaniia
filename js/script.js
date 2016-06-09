/*global $, alert, console*/

$(function () {
    
    'use strict';

    $('header').height($(window).height());
    $(window).resize(function() {
        $('header').height($(window).height());    
    });

    //End Screen & Resize

    // Links

    $('.site-nav-list li').click(function(){
        $(this).addClass('active-link').siblings().removeClass('active-link');
    });
});    