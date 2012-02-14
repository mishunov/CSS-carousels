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
    $.fn.slowEach = function (interval, callback) {
        return $.slowEach(this, interval, callback);
    };
}(window.jQuery));

$(function () {
    $('.colorDissolve img').slowEach(7000, function () {
        $(this)
            .animate({
                opacity: 1
            }, 1000)
            .delay(5000)
            .animate({
                opacity: 0
            }, 1000);
    });
});