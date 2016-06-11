/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    // Links

    $('.site-nav-list li').click(function(){
        $(this).addClass('active-link').siblings().removeClass('active-link');
    });
});    