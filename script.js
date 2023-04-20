$(document).ready(function () {
    const $google1998 = $('.google-1998');
    const $google2023 = $('.google-2023');
    const transitionThreshold = 0.5;

    $(document).mousemove(function (event) {
        const mouseXPercentage = event.pageX / $(window).width();

        if (mouseXPercentage <= transitionThreshold) {
            $google1998.css('opacity', 1);
            $google2023.css('opacity', 0);
        } else {
            $google1998.css('opacity', 0);
            $google2023.css('opacity', 1);
        }
    });
});
