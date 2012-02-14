/*globals defaults:true, window:false, $:false */

// First of all we need to detect whether browser
// supports animation natively or it needs a javascript
// polyfill.
// The detection code by the courtesy of Chris Heilmann
// http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/

var animation = false,
    elm = document.createElement('detect'),
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '';


if( elm.style.animationName ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}

(function ($) {
    $.slowEach = function (array, interval, callback) {
        if (!array.length) {
            return;
        }
        var i = 0;
        function next() {
            if (callback.call(array[i], i, array[i]) !== false) {
                if (++i < array.length) {
                    setTimeout(next, interval);
                }
            }
        }
        next();
        return array;
    };
    $.fn.colorDissolve = function (options) {
        var op = $.extend(defaults, options),
            $that = $(this),
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
        visibleItemDuration: 5000, // 4 seconds
        transitionDuration: 1000 // 1 second
    };
}(window.jQuery));

$(function () {
    if( animation === false ) {
        $('.colorDissolve img').colorDissolve({
            // TUNE YOUR CAROUSEL HERE

            // duration of an item being visible in miliseconds
            visibleItemDuration: 5000,

            // duration of a transition between items in miliseconds
            transitionDuration: 1000
        });
    }
});