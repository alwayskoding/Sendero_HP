var $ = jQuery;

$(document).ready(function () {
    // hide notification when x clicked
    $(".close-btn").click(function () {
        $(".sendero-homepage-notification-wrapper").hide();
    })

    // fade in and notification elements
    $(".sendero-homepage-notification-wrapper").removeClass("ht-cloak");
    $(".sendero-homepage-notification-wrapper").fadeTo('fast', 1);

    // fade in and show hero and quick access elements
    $(".quick-access-outer-wrapper").removeClass("ht-cloak");
    $(".quick-access-outer-wrapper").fadeTo('fast', 1);

    // fade in and show widgets 
    $(".widget-container-outer-wrapper").removeClass("ht-cloak");
    $(".widget-container-outer-wrapper").fadeTo('fast', 1);

});