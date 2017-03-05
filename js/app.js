// Menu
$('.head_hamb').click(function(){
    $('.head_hamb, .head_nav').toggleClass('is_active');
});

// Custom select
$('.select7').select7()

// Play/pause video
var video = $('.main_video')[0];
$('.main_video_button').click(function(){
    video.paused ? video.play() : video.pause();
    $(this).toggleClass('paused');
});
if(video){
    video.addEventListener('ended', function(){
        $('.main_video_button').toggleClass('paused');
    });
}

// Custom scrollbar
if($('.start_cards').length){
    $('.start_cards').mCustomScrollbar({
        scrollbarPosition: 'outside',
        autoDraggerLength: true
    });
}

// Sticky sidebar
// if($('.blog_sidebar').length){
//     if($(window).height()>760){
//         $('.blog_sidebar').css('position','fixed')
//         $(window).scroll(function(){
//             if($(document).scrollTop() < 100){
//                 $('.blog_sidebar').css('top', 130 - $(document).scrollTop())
//             } else if(($(document).height() - ($('.blog_sidebar').offset().top + $(window).height())) > 100){
//                 $('.blog_sidebar').css('top', '30px');
//             } else {
//                 $('.blog_sidebar').css({
//                     top: 'auto',
//                     bottom: 130 - ($(document).height() - ($(window).scrollTop() + $(window).height()))
//                 })
//             }
//         })
//     }
// }