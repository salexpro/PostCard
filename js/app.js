// $(document).foundation();

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
})