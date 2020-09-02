(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        noSwiping: true, //set to false if want slide functionality
        allowSlidePrev: false, //set to true if want to slide
	    allowSlideNext: false, //set to true if want to slide
        /* autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }, */

        // If we need pagination uncomment this method
        /* pagination: {
            el: '.swiper-pagination',
        }, */

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
})();
    
    

