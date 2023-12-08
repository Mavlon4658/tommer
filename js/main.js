let slide_1 = document.querySelector('#index_home .card_right_slider');
// console.log("slide_1");

if (slide_1) {
    let swiper = new Swiper('#index_home .card_right_slider', {
        slidesPerView: 1,
        centeredSlides: false,
        // slidesPerGroupSkip: 1,
        // grabCursor: true,
        // keyboard: {
        //     enabled: true,
        // },
        // breakpoints: {
        //     769: {
        //         slidesPerView: 2,
        //         slidesPerGroup: 2,
        //     },
        // },
        scrollbar: {
            el: "#index_home .index_question_card .slider_pagination",
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        pagination: {
            el: "#index_home .index_question_card .slide_count .slider_coun_in",
            type: "fraction",
            clickable: true,
        },
    });
}