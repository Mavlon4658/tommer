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


let tabs = document.querySelectorAll('.tab');
if (tabs.length) {
    tabs.forEach(tab => {
        let tab_btns = tab.querySelectorAll('button');
        let tab_items = tab.querySelectorAll('.tab_item');
        tab_btns.forEach((tab_btn, btn_idx) => {
            tab_btn.onclick = () => {
                if (!tab_items[btn_idx].classList.contains('active')) {
                    tab_items.forEach((tab_item, item_idx) => {
                        if (tab_item.classList.contains('active')) {
                            tab_item.classList.remove('active');
                            tab_item.classList.add('end-active')
                            setTimeout(() => {
                                tab_item.classList.remove('end-active')
                            }, 300);
                        }
                    })
                    setTimeout(() => {
                        tab_items[btn_idx].classList.add('active')
                    }, 300);
                }
                tab_btns.forEach(item => {
                    item.classList.remove('active')
                })
                tab_btn.classList.add('active')
            }
        })
    })
}

let checkboxs = document.querySelectorAll('.checkbox');
if (checkboxs.length) {
    checkboxs.forEach(checkbox => {
        handleCheckbox(checkbox)
        let input = checkbox.querySelector('input[type="checkbox"]');
        checkbox.onclick = () => {
            input.click();
            handleCheckbox(checkbox)
        }
    })
}

function handleCheckbox(el) {
    let input = el.querySelector('input[type="checkbox"]')
    if (input.checked) {
        el.classList.add('active')
    } else {
        el.classList.remove('active')
    }
}

let slide_1 = document.querySelector('#index_home .card_right_slider');

if (slide_1) {
    let swiper = new Swiper('#index_home .card_right_slider', {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 15,
        speed: 1400,
        scrollbar: {
            el: "#index_home .index_question_card .slider_pagination",
        },
    });

    const makeFraction = async () => {
        let real_idx = await swiper.realIndex + 1;
        let slid_length = await swiper.slides.length;
        let home_slide_count = await document.querySelector('#index_home .index_question_card .slide_count');
        home_slide_count.textContent = `Вопрос ${real_idx} из ${slid_length} `;
    }

    swiper.on('slideChange', () => makeFraction())

    makeFraction();
}

try {
    let swiper2 = new Swiper(".project-slide", {
        slidesPerView: 1.1,
        spaceBetween: 15,
        simulateTouch: true,
        speed: 1400,
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
} catch (err) {
    console.log(err);
}

let customer_slider = document.querySelector('.customers .customer_slider')
if (customer_slider) {
    let custom_slide = new Swiper(customer_slider, {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 1400,
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

try {
    let swiper3 = new Swiper(".team-slide", {
        slidesPerView: 1.15,
        spaceBetween: 15,
        speed: 1400,
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
} catch (err) {
    console.log(err);
}

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

const project_filter_btn = document.querySelector('#sort_card .filter_btn')
const filter_card = document.querySelector('#sort_card .mobile_filter_cards_wrapper');
if (project_filter_btn) {
    project_filter_btn.onclick = () => {
        filter_card.style.maxHeight = filter_card.style.maxHeight ? null : filter_card.scrollHeight + 'px';
    }
}

let award_img = document.querySelectorAll('#sort_card .sort_cards .card_item__head img');
if (award_img.length) {
    award_img.forEach((img, idx) => {
        img.onclick = () => {
            let src = [];
            award_img.forEach(item => {
                src.push({
                    'src': item.getAttribute('src'),
                    'thumb': item.getAttribute('src'),
                    'subHtml': ''
                });
            })
            if (document.querySelector('#lightgallery')) {
                document.querySelector('#lightgallery').remove();
            }
            const galleryContainer = document.createElement('div');
            galleryContainer.id = 'lightgallery';
            document.body.appendChild(galleryContainer);
            lightGallery(galleryContainer, {
                dynamic: true,
                dynamicEl: src,
                index: idx
            });
        }
    })
}

let project_home_slider = document.querySelector('.card_project_home .home_slider');
if (project_home_slider) {
    let project_main_slider = new Swiper(".card_project_home .mini_slider", {
        spaceBetween: 5,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            750: {
                spaceBetween: 8,
                slidesPerView: 3,
            },
            470: {
                slidesPerView: 4,
            }
        }
    });

    let project_mini_slider = new Swiper(".card_project_home .main_slider", {
        spaceBetween: 10,
        effect: "fade",
        navigation: {
            nextEl: ".main_slider_next_btn",
            prevEl: ".main_slider_prev_btn",
        },
        thumbs: {
            swiper: project_main_slider,
        },
    });
}

let example_slide = document.querySelector('.example .example_slider')
if (example_slide) {
    let example_slider = new Swiper(example_slide, {
        spaceBetween: 1,
        spaceBetween: 0,
        speed: 1400,
        navigation: {
            nextEl: ".example_next_btn",
            prevEl: ".example_prev_btn",
        },
    })
}

let built_slider = document.querySelector('.built .main_slide');
if (built_slider) {
    let built_main_slider = new Swiper(".built .mini_slide", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });

    let built_mini_slider = new Swiper(".built .main_slide", {
        spaceBetween: 0,
        speed: 1400,
        navigation: {
            nextEl: ".built_next_btn",
            prevEl: ".built_prev_btn",
        },
        pagination: {
            el: ".built .pagination",
            clickable: true,
        },
        thumbs: {
            swiper: built_main_slider,
        },
    });
}

let similar_card = document.querySelector('.similar_project__slider');
if (similar_card) {
    let similar_slider = new Swiper('.similar_project__slider', {
        slidesPerView: 1.1,
        spaceBetween: 15,
        speed: 1400,
        navigation: {
            nextEl: '.similar_slider_next',
            prevEl: '.similar_slider_prev'
        },
        breakpoints: {
            1250: {
                spaceBetween: 30,
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            470: {
                slidesPerView: 1.4
            }
        }
    })
}