/*globals defaults:true, window:false, $:false*/

(function ($) {
    $.slowEach = function (array, interval, callback) {
        if (!array.length) {
            return;
        }
        var i = 0;
        next();
        function next() {
            if (callback.call(array[i], i, array[i]) !== false) {
                if (++i < array.length) {
                    setTimeout(next, interval);
                }
            }
        }
        return array;
    };
    $.fn.colorDissolve = function (options) {
        var op = $.extend(defaults, options),
            interval = op.visibleItemDuration + 2 * op.transitionDuration;
        return $.slowEach(this, interval, function () {
            $(this)
                .animate({
                    opacity: 1
                }, op.transitionDuration)
                .delay(op.visibleItemDuration)
                .animate({
                    opacity: 0
                }, op.transitionDuration);
        });
    };
    var defaults = {
        visibleItemDuration: 4000, // 4 seconds
        transitionDuration: 1000 // 1 second
    };
}(window.jQuery));

$(function () {
    $('.colorDissolve img').colorDissolve({
        visibleItemDuration: 4000,
        transitionDuration: 1000
    });
});