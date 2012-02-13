/*globals defaults:true*/

(function ($) {
    $.fn.horizontalCarousel = function(options) {
        var i, shift,
            $that = this,
            op = $.extend(defaults, options);
        return this.each(function () {
            for (i = 1; i < op.numberOfItems; i += 1) {
                shift = -i * op.cwidth;
                $that.delay(op.visibleItemDuration).animate({
                    marginLeft: shift
                }, op.transitionDuration);
            }
            $that.delay(op.visibleItemDuration).animate({
                marginLeft: 0
            }, op.transitionDuration, function () {
                i = 0;
                $that.horizontalCarousel(options);
            });
        });
    };
    var defaults = {
        cwidth: 30, // carousel's height in pixels
        numberOfItems: 5, // number of the items in the carousel
        visibleItemDuration: 1000, // 4 seconds
        transitionDuration: 1000 // 1 second
    };
}(window.jQuery));

$(function () {
    $('.horizontal .items').horizontalCarousel({
        cwidth: 287,
        numberOfItems: 4,
        visibleItemDuration: 4000,
        transitionDuration: 1000
    });
});