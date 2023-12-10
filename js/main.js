let slide_1 = document.querySelector('#index_home .card_right_slider');
// console.log("slide_1");

if (slide_1) {
    let swiper = new Swiper('#index_home .card_right_slider', {
        slidesPerView: 1,
        centeredSlides: false,
        scrollbar: {
            el: "#index_home .index_question_card .slider_pagination",
        },
    });

    function makeFraction () {
        let real_idx = swiper.realIndex + 1;
        let slid_length = swiper.slides.length;
        let home_slide_count = document.querySelector('#index_home .index_question_card .slide_count');
        home_slide_count.textContent = `Вопрос ${real_idx} из ${slid_length} `;
    }

    swiper.on('slideChange', () => makeFraction())

    makeFraction();
}

let swiper2 = new Swiper(".project-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let customer_slider = document.querySelector('.customers .customer_slider') 
if (customer_slider) {
    let custom_slide = new Swiper(customer_slider, {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".customer_slide_next_btn",
            prevEl: ".customer_slide_prev_btn",
        },
    })
}

let swiper3 = new Swiper(".team-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    // freeMode: true,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let customer_sliders = document.querySelectorAll('.customers .customer_slider .swiper-slide')
if (customer_sliders.length) {
    customer_sliders.forEach(item => {
        let btn = item.querySelector('.show__btn');
        let description = item.querySelector('.description');
        btn.onclick = () => {
            description.classList.toggle('hide')
            btn.classList.toggle('active')
        }
    })
}

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
    accordions.forEach((item) => {
        const header = item.querySelector('.accordion_head');
        const content = item.querySelector('.accordion_body');
        
        header.addEventListener('click', () => {
            header.classList.toggle('active')
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
}