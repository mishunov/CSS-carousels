/*globals defaults:true*/

(function ($) {
    $.fn.verticalCarousel = function(options) {
        var i, shift,
            $that = this,
            op = $.extend(defaults, options);
        return this.each(function () {
            for (i = 1; i < op.numberOfItems; i += 1) {
                shift = -i * op.cheight;
                $that.delay(op.visibleItemDuration).animate({
                    marginTop: shift
                }, op.transitionDuration);
            }
            $that.delay(op.visibleItemDuration).animate({
                marginTop: 0
            }, op.transitionDuration, function () {
                i = 0;
                $that.verticalCarousel(options);
            });
        });
    };
    var defaults = {
        cheight: 30, // carousel's height in pixels
        numberOfItems: 5, // number of the items in the carousel
        visibleItemDuration: 1000, // 4 seconds
        transitionDuration: 1000 // 1 second
    };
}(window.jQuery));

$(function () {
    $('.vertical .items').verticalCarousel({
        cheight: 430,
        numberOfItems: 4,
        visibleItemDuration: 4000,
        transitionDuration: 1000
    });
});