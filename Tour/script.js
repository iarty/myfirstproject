$(document).ready(function(){

function showModalWindow(){
    $('.main_btna').on('click', function () {
        $('.overlay').fadeIn('fast');
        $('.modal').slideDown('fast');
    });
    $('.main_btn').on('click', function () {
        $('.overlay').fadeIn('fast');
        $('.modal').slideDown('fast');
    });
    $('nav').find('li').eq(1).on('click', function () {
        $('.overlay').fadeIn('fast');
        $('.modal').slideDown('fast');
    });
};

function close(){
    $('.close').on('click', function(){
        $('.overlay').fadeOut('fast');
        $('.modal').slideUp('fast');
    });
};

showModalWindow();
close();

});