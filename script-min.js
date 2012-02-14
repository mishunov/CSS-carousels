

/*********************************************** 
     Begin vertical.js 
***********************************************/ 

/*globals defaults:true, alert:false*/

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
   if( animation === false ) {
       $('.vertical .items').verticalCarousel({
           cheight: 430,
           numberOfItems: 4,
           visibleItemDuration: 4000,
           transitionDuration: 1000
       });
   }
});

/*********************************************** 
     Begin horizontal.js 
***********************************************/ 

/*globals defaults:true*/

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
    if( animation === false ) {
        $('.horizontal .items').horizontalCarousel({
            cwidth: 287,
            numberOfItems: 4,
            visibleItemDuration: 4000,
            transitionDuration: 1000
        });
    }
});

/*********************************************** 
     Begin colorDissolve.js 
***********************************************/ 

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
        visibleItemDuration: 4000, // 4 seconds
        transitionDuration: 1000 // 1 second
    };
}(window.jQuery));

$(function () {
    if( animation === false ) {
        $('.colorDissolve img').colorDissolve({
            visibleItemDuration: 4500,
            transitionDuration: 500
        });
    }
});

/*********************************************** 
     Begin dissolve.js 
***********************************************/ 

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
    $.fn.dissolve = function (options) {
        var op = $.extend(defaults, options),
            $that = $(this),
            interval = op.visibleItemDuration + op.transitionDuration;
        return $.slowEach(this, interval, function () {
            var $this = $(this);
            $this
                .animate({
                    opacity: 1
                }, op.transitionDuration, function () {
                    function initCarousel() {
                        $that.dissolve(options);
                    }
                    if ($this.is(':last-child')) {
                        setTimeout(initCarousel, op.visibleItemDuration);
                    }
                })
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
    if( animation === false ) {
        $('.dissolve img').dissolve({
            visibleItemDuration: 4000,
            transitionDuration: 1000
        });
    }
});