

/*********************************************** 
     Begin vertical.js 
***********************************************/ 

var cheight=430,
    numberOfItems=4,
    visibleItemDuration=4000,
    transitionDuration=1000,
    i, shift;

(function ($) {
    $.fn.animateCarousel = function() {
        return this.each(function () {
            for (i = 1; i < numberOfItems; i += 1) {
                shift = -i * cheight;
                $(this).delay(visibleItemDuration).animate({
                    marginTop: shift
                }, transitionDuration);
            }
            $(this).delay(visibleItemDuration).animate({
                marginTop: 0
            }, transitionDuration);
        });
    };
}(window.jQuery));

$(function () {
    $('.vertical .items').animateCarousel();
});