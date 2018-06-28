$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#Content']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var speed = 700;
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top },  speed);
            }
        }
    });
});