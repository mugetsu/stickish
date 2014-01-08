/*!
* Instagram Sticky Header v.1
* Randell Quitain [@cprjk]
* Licensed under the MIT license
*/

;(function ( $, window, document, undefined ) {

    var pluginName = 'stickish',
    defaults = {
        sticky: '.stickish-item'
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            $(this.settings.sticky).each(function(){
                var currSticky = $(this).wrap('<div class="sticky-header" />');
                currSticky.parent().height(currSticky.outerHeight());
                $.data(currSticky[0], 'pos', currSticky.offset().top);
            });
            this.scrolling(this.element, this.settings);
        },
        scrolling: function () {
            var sticky = this.settings.sticky;
            window.onscroll = function() {
                $(sticky).each(function(i) {
                    var currSticky = $(this)
                    , nextSticky = $(sticky).eq(i+1)
                    , prevSticky = $(sticky).eq(i-1)
                    , pos = $.data(currSticky[0], 'pos')
                    , nextPos
                    , prevPos;

                    if (pos <= $(window).scrollTop()) {
                        currSticky.addClass('fixed');
                        nextPos = $.data(nextSticky[0], 'pos') - currSticky.outerHeight()
                        if (nextSticky.length > 0 && currSticky.offset().top >= nextPos) {
                            currSticky.addClass('absolute').css('top', nextPos);
                        }
                    } else {
                        currSticky.removeClass('fixed');
                        prevPos = $.data(currSticky[0], 'pos')  - prevSticky.outerHeight();
                        if (prevSticky.length > 0 && $(window).scrollTop() <= prevPos) {
                            prevSticky.removeClass('absolute').removeAttr('style');
                        }
                    }
                });
            }; 
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, 'plugin_' + pluginName ) ) {
                $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );