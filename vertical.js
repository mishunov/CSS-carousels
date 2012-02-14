/*globals defaults:true, alert:false*/

// First of all we need to detect whether browser
// supports animation natively or it needs a javascript
// polyfill.
// The detection code by the courtesy of Christian Heilmann
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
        cheight: 30,
        numberOfItems: 5,
        visibleItemDuration: 1000,
        transitionDuration: 1000
    };
}(window.jQuery));

$(function () {
   if( animation === false ) {
       $('.vertical .items').verticalCarousel({
           // TUNE YOUR CAROUSEL HERE
           cheight: 430, // carousel's height in pixels
           numberOfItems: 4, // number of the items in the carousel
           visibleItemDuration: 4000, // 4 seconds
           transitionDuration: 1000 // 1 second
       });
   }
});