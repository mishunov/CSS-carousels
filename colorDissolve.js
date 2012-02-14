/*globals defaults:true, window:false, $:false, alert:false*/

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
            $that = $(this),
            $elem,
            interval = op.visibleItemDuration + 2 * op.transitionDuration;
        return $.slowEach(this, interval, function () {
            $(this)
                .animate({
                    opacity: 1
                }, op.transitionDuration)
                .delay(op.visibleItemDuration)
                .animate({
                    opacity: 0
                }, op.transitionDuration, function () {
                    if ($(this).is(':last-child')) {
                        $that.colorDissolve(options);
                    }
                });
        });
    };
    var defaults = {
        visibleItemDuration: 4000, // 4 seconds
        transitionDuration: 1000 // 1 second
    };
}(window.jQuery));

$(function () {
    $('.colorDissolve img').colorDissolve({
        visibleItemDuration: 4500,
        transitionDuration: 500
    });
});