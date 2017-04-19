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

// Whom page mobile form
$('#step2').click(function(){
    $('.whom_header, .whom_card').addClass('step2');
})

// Amount of postcards
$('.zoom_amount_input #minus').click(function(){
    if($('.zoom_amount_input input').val()>1){
        $('.zoom_amount_input input').val($('.zoom_amount_input input').val() - 1);
    }
})
$('.zoom_amount_input #plus').click(function(){
    $('.zoom_amount_input input').val(Number($('.zoom_amount_input input').val()) + 1);
});