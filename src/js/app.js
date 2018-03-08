/*
@codekit-prepend '../../bower_components/jquery/dist/jquery.min';
@codekit-prepend './lib/jquery-select7.min';
@codekit-prepend '../../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';
@codekit-prepend '../../bower_components/foundation-sites/dist/plugins/foundation.core';
@codekit-prepend '../../bower_components/foundation-sites/dist/plugins/foundation.util.mediaQuery';
@codekit-prepend '../../bower_components/foundation-sites/dist/plugins/foundation.util.keyboard';
@codekit-prepend '../../bower_components/foundation-sites/dist/plugins/foundation.tabs';
@codekit-prepend '../../bower_components/foundation-sites/dist/plugins/foundation.util.triggers';
@codekit-prepend '../../bower_components/foundation-sites/dist/plugins/foundation.sticky';
*/

$(document).foundation();

// Menu
$('.head_hamb').click(function(){
    $('.head_hamb, .head_nav').toggleClass('is_active');
});


if($('.whom').length){
    var whom_cont = $('.whom_card_content')[0].outerHTML;
}

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

// Whom page
$('.whom_card_inner a.button').click(function(){
    $('.whom_card_inner').append(whom_cont);
    $('.whom_card_content:last .select7').select7();
})
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

// Fast navigation
function pageWidget(pages) {
    var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul><button class="widget_button"></button></div>');
    widgetWrap.prependTo('body');
    for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    }
    var widgetStilization = $('<style>.widget_wrap{position:fixed;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_button{position:absolute;top:0;left:100%;width:24px;height:24px;background-color:#222;cursor:pointer;outline:none;}.widget_button:after{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlPSJudWxsIiBkPSJtMTQuOTk1OTUsMTUuOTk1NjhsLTEzLjk5NjIyLDBjLTAuNTUyNiwwIC0wLjk5OTczLC0wLjQ0NzEzIC0wLjk5OTczLC0wLjk5OTczbDAsLTEzLjk5NjIyYzAsLTAuNTUyNiAwLjQ0NzEzLC0wLjk5OTczIDAuOTk5NzMsLTAuOTk5NzNsMTMuOTk2MjIsMGMwLjU1MjYsMCAwLjk5OTczLDAuNDQ3MTMgMC45OTk3MywwLjk5OTczbDAsMTMuOTk2MjJjMCwwLjU1MjYgLTAuNDQ3MTMsMC45OTk3MyAtMC45OTk3MywwLjk5OTczem0tMC45OTk3MywtMTMuOTk2MjJsLTExLjk5Njc2LDBsMCwxMS45OTY3NmwxMS45OTY3NiwwbDAsLTExLjk5Njc2em0tNi45OTgxMSw0Ljk5ODY1bC0yLjk5OTE5LDBsMCwtMi45OTkxOWwyLjk5OTE5LDBsMCwyLjk5OTE5em0wLDQuOTk4NjVsLTIuOTk5MTksMGwwLC0yLjk5OTE5bDIuOTk5MTksMGwwLDIuOTk5MTl6bTQuOTk4NjUsLTQuOTk4NjVsLTIuOTk5MTksMGwwLC0yLjk5OTE5bDIuOTk5MTksMGwwLDIuOTk5MTl6bTAsNC45OTg2NWwtMi45OTkxOSwwbDAsLTIuOTk5MTlsMi45OTkxOSwwbDAsMi45OTkxOXoiLz48L3N2Zz4=) no-repeat 50% 50%;animation: widget 5s ease-in-out 2s infinite backwards;}.widget_wrap.is_active{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_wrap.is_active .widget_button:after{animation:none}.widget_list{list-style:none;margin:0}.widget_link{display:block;color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline;color:blue}.widget_link:visited{color:purple}@keyframes widget{0%{transform:rotate(0deg)}20%{transform:rotate(180deg)}100%{transform:rotate(180deg)}}@media screen and (max-width:480px){.widget_wrap{top:auto;bottom:0;border-radius:0 10px 0 0}.widget_button{top:auto;bottom:0;width:35px;height:35px}.widget_button:after{background-size:22px}}</style>');
    widgetStilization.prependTo(".widget_wrap");
    // $('.widget_wrap').hover(function(){$(this).toggleClass('is_active')});
    $('.widget_button').click(function () { $(this).parent().toggleClass('is_active') });
}

pageWidget(['actually', 'add', 'article', 'blog', 'check', 'contact', 'how', 'pick', 'plan', 'price', 'record', 'register', 'start', 'thank', 'video', 'whom', 'zoom']);