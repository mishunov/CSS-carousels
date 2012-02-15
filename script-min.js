/*********************************************** 
     Begin vertical.js 
***********************************************//*globals defaults:true, alert:false*/// First of all we need to detect whether browser
// supports animation natively or it needs a javascript
// polyfill.
// The detection code by the courtesy of Christian Heilmann
// http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/
var animation=!1,elm=document.createElement("detect"),animationstring="animation",keyframeprefix="",domPrefixes="Webkit Moz O ms Khtml".split(" "),pfx="";elm.style.animationName&&(animation=!0);if(animation===!1)for(var i=0;i<domPrefixes.length;i++)if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){pfx=domPrefixes[i];animationstring=pfx+"Animation";keyframeprefix="-"+pfx.toLowerCase()+"-";animation=!0;break}(function(a){a.fn.verticalCarousel=function(c){var d,e,f=this,g=a.extend(b,c);return this.each(function(){for(d=1;d<g.numberOfItems;d+=1){e=-d*g.cheight;f.delay(g.visibleItemDuration).animate({marginTop:e},g.transitionDuration)}f.delay(g.visibleItemDuration).animate({marginTop:0},g.transitionDuration,function(){d=0;f.verticalCarousel(c)})})};var b={cheight:30,numberOfItems:5,visibleItemDuration:1e3,transitionDuration:1e3}})(window.jQuery);$(function(){animation===!1&&$(".vertical .items").verticalCarousel({cheight:430,numberOfItems:4,visibleItemDuration:4e3,transitionDuration:1e3})});var animation=!1,elm=document.createElement("detect"),animationstring="animation",keyframeprefix="",domPrefixes="Webkit Moz O ms Khtml".split(" "),pfx="";elm.style.animationName&&(animation=!0);if(animation===!1)for(var i=0;i<domPrefixes.length;i++)if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){pfx=domPrefixes[i];animationstring=pfx+"Animation";keyframeprefix="-"+pfx.toLowerCase()+"-";animation=!0;break}(function(a){a.fn.horizontalCarousel=function(c){var d,e,f=this,g=a.extend(b,c);return this.each(function(){for(d=1;d<g.numberOfItems;d+=1){e=-d*g.cwidth;f.delay(g.visibleItemDuration).animate({marginLeft:e},g.transitionDuration)}f.delay(g.visibleItemDuration).animate({marginLeft:0},g.transitionDuration,function(){d=0;f.horizontalCarousel(c)})})};var b={cwidth:30,numberOfItems:5,visibleItemDuration:1e3,transitionDuration:1e3}})(window.jQuery);$(function(){animation===!1&&$(".horizontal .items").horizontalCarousel({cwidth:287,numberOfItems:4,visibleItemDuration:4e3,transitionDuration:1e3})});var animation=!1,elm=document.createElement("detect"),animationstring="animation",keyframeprefix="",domPrefixes="Webkit Moz O ms Khtml".split(" "),pfx="";elm.style.animationName&&(animation=!0);if(animation===!1)for(var i=0;i<domPrefixes.length;i++)if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){pfx=domPrefixes[i];animationstring=pfx+"Animation";keyframeprefix="-"+pfx.toLowerCase()+"-";animation=!0;break}(function(a){a.slowEach=function(a,b,c){function e(){c.call(a[d],d,a[d])!==!1&&++d<a.length&&setTimeout(e,b)}if(!a.length)return;var d=0;e();return a};a.fn.colorDissolve=function(c){var d=a.extend(b,c),e=a(this),f=d.visibleItemDuration+2*d.transitionDuration;return a.slowEach(this,f,function(){a(this).animate({opacity:1},d.transitionDuration).delay(d.visibleItemDuration).animate({opacity:0},d.transitionDuration,function(){a(this).is(":last-child")&&e.colorDissolve(c)})})};var b={visibleItemDuration:5e3,transitionDuration:1e3}})(window.jQuery);$(function(){animation===!1&&$(".colorDissolve .item").colorDissolve({visibleItemDuration:5e3,transitionDuration:1e3})});var animation=!1,elm=document.createElement("detect"),animationstring="animation",keyframeprefix="",domPrefixes="Webkit Moz O ms Khtml".split(" "),pfx="";elm.style.animationName&&(animation=!0);if(animation===!1)for(var i=0;i<domPrefixes.length;i++)if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){pfx=domPrefixes[i];animationstring=pfx+"Animation";keyframeprefix="-"+pfx.toLowerCase()+"-";animation=!0;break}(function(a){a.slowEach=function(a,b,c){function e(){c.call(a[d],d,a[d])!==!1&&++d<a.length&&setTimeout(e,b)}if(!a.length)return;var d=0;e();return a};a.fn.dissolve=function(c){var d=a.extend(b,c),e=a(this),f=d.visibleItemDuration+d.transitionDuration;return a.slowEach(this,f,function(){var b=a(this);b.animate({opacity:1},d.transitionDuration,function(){function a(){e.dissolve(c)}b.is(":last-child")&&setTimeout(a,d.visibleItemDuration)}).delay(d.visibleItemDuration).animate({opacity:0},d.transitionDuration)})};var b={visibleItemDuration:4e3,transitionDuration:1e3}})(window.jQuery);$(function(){animation===!1&&$(".dissolve .item").dissolve({visibleItemDuration:4e3,transitionDuration:1e3})});