jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
        menu = $('.navegacion ul');
        main = $('.main');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
            main.css('padding-top', '7rem');
        }
        else {
            menu.addClass('show');
            main.css('padding-top', '16rem');
        }
    });
});