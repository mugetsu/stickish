/*!
 * Instagram Sticky Header v.1
 * Randell Quitain [@cprjk]
 * Licensed under the MIT license
 */
 
var stickish = {
    init: function (options, elem) {
        this.options = $.extend({}, this.options, options);
        this.elem = elem;
        this.$elem = $(elem);
        this._start();
        return this;
    },
    options: {},
    _start: function () {
        this.$elem.each(function (i) {
            var currSticky = $(this).wrap('<div class="sticky-header" />');
            currSticky.parent().height(currSticky.outerHeight());
            $.data(currSticky[0], 'pos', currSticky.offset().top);
        });
    },
    scrolling: function (element) {
        $(element).each(function (i) {
            var currSticky = $(this),
                nextSticky = $(element).eq(i + 1),
                prevSticky = $(element).eq(i - 1),
                pos = $.data(currSticky[0], 'pos'),
                nextPos, prevPos;

            if (pos <= $(window).scrollTop()) {
                currSticky.addClass('fixed');
                nextPos = $.data(nextSticky[0], 'pos') - currSticky.outerHeight();
                if (nextSticky.length > 0 && currSticky.offset().top >= nextPos) {
                    currSticky.addClass('absolute').css('top', nextPos);
                }
            } else {
                currSticky.removeClass('fixed');
                prevPos = $.data(currSticky[0], 'pos') - prevSticky.outerHeight();
                if (prevSticky.length > 0 && $(window).scrollTop() <= prevPos) {
                    prevSticky.removeClass('absolute').removeAttr('style');
                }
            }
        });

    }
};

if (typeof Object.create !== "function") {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

$.plugin = function (name, object) {
    $.fn[name] = function (options) {
        return this.each(function () {
            if (!$.data(this, name)) {
                $.data(this, name, Object.create(object).init(
                    options, this));
            }
        });
    };
};