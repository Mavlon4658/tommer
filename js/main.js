const mobile_nav_dropdowns = document.querySelectorAll('.mobile_menu .nav_dropdown');
mobile_nav_dropdowns.forEach(dropdown => {
    let head = dropdown.querySelector('.nav_dropdown__head');
    let body = dropdown.querySelector('.nav_dropdown__body')
    head.onclick = () => {
        body.style.maxHeight = body.style.maxHeight ? null : body.scrollHeight + 'px';
    }
})

const head_bars = document.querySelector('header .bars');
const mobile_menu = document.querySelector('.mobile_menu_wrapper');
const mobile_menu_clos_btn = document.querySelector('.mobile_menu_wrapper .close')
const mobile_menu_bg = document.querySelector('.mobile_menu_wrapper .mobile_menu_bg')

head_bars.onclick = () => {
    mobile_menu.classList.add('active')
}

mobile_menu_clos_btn.onclick = () => {
    mobile_menu.classList.remove('active')
}

mobile_menu_bg.onclick = () => {
    mobile_menu.classList.remove('active')
}

let slide_1 = document.querySelector('#index_home .card_right_slider');

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
    slidesPerView: 1.1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        750: {
            slidesPerView: 2.3,
            spaceBetween: 20,
        },
        470: {
            slidesPerView: 1.4,
            spaceBetween: 15,
        }
    }
});

let customer_slider = document.querySelector('.customers .customer_slider') 
if (customer_slider) {
    let custom_slide = new Swiper(customer_slider, {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: ".customer_slide_next_btn",
            prevEl: ".customer_slide_prev_btn",
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1.7,
                spaceBetween: 20,
            },
            750: {
                slidesPerView: 1.4,
                spaceBetween: 20,
            }
        }
    })
}

let swiper3 = new Swiper(".team-slide", {
    slidesPerView: 1.15,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        750: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        470: {
            slidesPerView: 1.4,
            spaceBetween: 15,
        }
    }
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

const selections__items = document.querySelectorAll('.selections__item')
if (selections__items.length) {
    selections__items.forEach(item => {
        let sel_head = item.querySelector('.selections__item__head');
        let sel_title = item.querySelector('.selections__item__head span')
        let sel_bodys = item.querySelectorAll('.selections__item__body button');
        sel_head.onclick = () => {
            item.classList.toggle('active')
        }

        sel_bodys.forEach(el => {
            el.onclick = () => {
                item.classList.toggle('active');
                sel_title.textContent = el.textContent;
                sel_bodys.forEach(el2 => {
                    el2.classList.remove('active');
                })
                el.classList.add('active')
            }
        })
    })
}