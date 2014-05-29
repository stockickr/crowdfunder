$(document).ready(function() {
    $('.strapline-container')
        .css({"opacity":0})   // Set to 0 as soon as possible â€“ may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
        .delay(200)           // Wait for a bit so the user notices it fade in
        .css({"opacity":1});  // Fade it back in. Swap css for animate in legacy browsers if required.
});
   tiles = $(".fade").fadeTo(0, 0);

$(window).scroll(function(d,h) {
    tiles.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(500,1);
    });
});
$(window).scroll(function() {
    // The social div
    var $socialDiv = $('.strapline');

    //Get scroll position of window
    var windowScroll = $(this).scrollTop();

    //Slow scroll of social div and fade it out
    $socialDiv.css({
    'margin-top' : - (windowScroll / 3) + "px",
    'opacity' : 1 - (windowScroll / 400)
    });
    /* **** input things for input things **** */
    $('input[type="email"]').focus(function() {
        if (this.value == this.defaultValue){
            this.value = '';
        }
        if(this.value != this.defaultValue){
            this.select();
        }
    });
    $('input[type="email"]').blur(function() {
        if ($.trim(this.value) == ''){
            this.value = (this.defaultValue ? this.defaultValue : '');
        }
    });


});




