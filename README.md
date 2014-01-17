Stickish
========

Instagram Sticky Header for Web

##Basic Usage:

'.stickish-item' is the default class name for elements you want to behave like instagram sticky headers.

```javascript
$(document).ready(function() {

    // call stickish object
    $.plugin('stickish', stickish);

    // initialize plugin
    $('.stickish-item').stickish();

    // initialize methods on specific events
    $(window).on('scroll', function() {
        var inst = $('.stickish-item').data('stickish');
        inst.scrolling('.stickish-item');
    });

});
```

... and for its Basic stylesheet you can add:

```html
    <link href="path_to/stickish.css" rel="stylesheet">
```

##Demo:

[Sticky Headers](http://mugetsu.github.io/stickish/)
