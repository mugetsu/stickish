stickish
========

Instagram Sticky Header for Web

##Basic Usage:

'.stickish-item' is the default class name for elements you want to behave like instagram sticky headers.

    $(document).ready(function(){
        $('.stickish-item').stickish();
    });

... and for its Basic stylesheet you can add:

    <link href="path_to/stickish.css" rel="stylesheet">

##Settings:
    
    $('.stickish-item').stickish({
        stickies: '.CLASS_NAME_OF_THE_ELEMENT_OF_YOU_KNOW_YOU_WANT_TO'
    });

##Demo:

[Sticky Headers](http://mugetsu.github.io/stickish/)
