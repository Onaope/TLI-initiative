(document).ready(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 500) {
            $('.sticky').addClass('solid');
        } else {
            $('.sticky').removeClass('solid');
        }
    })
})
