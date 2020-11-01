$('i.fa-bars').click(function () {
    if ($('nav.mobile-nav').css('display') == 'block') {
        $('nav.mobile-nav').slideUp()
    } else {
        $('nav.mobile-nav').slideDown()
    }
})
