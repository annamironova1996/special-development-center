$(document).ready(function () {
    //кастомный селект смены языка
    $('[data-id="header-select"]').each(function () {
        $(this).select2({
            minimumResultsForSearch: -1,
            dropdownParent: $(this).closest('.header-bottom__select'),
            selectOnClose: true,
        });
    });

    //кастомный селект в модальных окнах
    $('.modal-select').each(function () {
        $(this)
            .select2({
                minimumResultsForSearch: -1,
                dropdownParent: $(this).closest('.modal'),
                selectOnClose: true,
            })
            .on('change.select2', function (e) {
                function selectValidation(select) {
                    const selectedValue = select.val();
                    let parent = select.closest('.modal-form__wrapper');
                    let error = parent.find('.error');
                    if (selectedValue === '') {
                        error.addClass('active');
                    } else {
                        error.removeClass('active');
                    }
                }
                selectValidation(selectCallForm);
                selectValidation(selectBidForm);
                selectValidation(selectEmployeesForm);
                selectValidation(selectPartnersForm);
            });
    });

    //мобильное меню
    $('.header-top__mobile-btn').on('click', function () {
        let header = $('.header');
        if (header.hasClass('active')) {
            header.removeClass('active');
            header.addClass('no-active');
        } else {
            header.removeClass('no-active');
            header.addClass('active');
        }

        $(this).toggleClass('close');
        $('.header-bottom').toggleClass('active');
    });

    //слайдер - блок "о компании"
    const mainAboutSwiper = new Swiper('.main-about-swiper', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.main-about-btn-next',
            prevEl: '.main-about-btn-prev',
        },
        effect: 'fade',
        pagination: {
            el: '.main-swiper-pagination',
            clickable: true,
        },
    });

    //при нажатии на видео/фото открывается модальное окно
    let magnific_popup = $('.magnific-popup');
    if (magnific_popup)
        magnific_popup.each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1],
                },
                callbacks: {
                    elementParse: function (item) {
                        if (item.el[0].className == 'video') {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    },
                },
            });
        });

    //слайдер блок - "лицензии и сертификаты"
    $(document).ready(function () {
        $('.certificates-list-swiper').each(function (index) {
            const $swiper = $(this);

            const $container = $swiper.closest('.container');
            const $nextBtn = $container.find('.certificates-btn-next');
            const $prevBtn = $container.find('.certificates-btn-prev');

            new Swiper(this, {
                slidesPerView: 1.4,
                spaceBetween: 6,
                navigation: {
                    nextEl: $nextBtn[0] || null,
                    prevEl: $prevBtn[0] || null,
                },
                breakpoints: {
                    1091: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    701: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    531: {
                        slidesPerView: 2,
                        spaceBetween: 6,
                    },
                },
            });
        });
    });

    //слайдер блок - "новости"
    $('.news-swiper').each(function () {
        const $swiper = $(this);
        const $container = $swiper.closest('.container');

        new Swiper(this, {
            slidesPerView: 'auto',
            spaceBetween: 8,
            navigation: {
                nextEl: $container.find('.swiper-btn-next')[0],
                prevEl: $container.find('.swiper-btn-prev')[0],
            },
            breakpoints: {
                1131: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                701: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
            },
        });
    });

    //слайдер блок - "Фотогалерея - 1"
    const serviceGallery_1 = new Swiper('.service-item__gallery-swiper-1', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.gallery-btn-next-1',
            prevEl: '.gallery-btn-prev-1',
        },
        breakpoints: {
            1131: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            701: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });

    //слайдер блок - "Фотогалерея - 2"
    const serviceGallery_2 = new Swiper('.service-item__gallery-swiper-2', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.gallery-btn-next-2',
            prevEl: '.gallery-btn-prev-2',
        },
        breakpoints: {
            1131: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            701: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });

    //слайдер блок - "Фотогалерея - 3"
    const serviceGallery_3 = new Swiper('.service-item__gallery-swiper-3', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.gallery-btn-next-3',
            prevEl: '.gallery-btn-prev-3',
        },
        breakpoints: {
            1131: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            701: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });

    //открытие и закрытие модального окна
    $('[data-id]').on('click', function (e) {
        const id = $(this).attr('data-id');
        const elementId = `#${id}`;

        $(elementId).addClass('active');

        if ($('.header-bottom').hasClass('active')) {
            $('.header-bottom').removeClass('active');
            $('.header').removeClass('active').addClass('no-active');
            $('.header-top__mobile-btn').removeClass('close');
        }

        if (id !== 'presentation') {
            $('.presentation-modal').removeClass('active');
        }

        e.stopPropagation();
    });
    $(document).on('click', function (e) {
        const $modal = $('.presentation-modal');

        if ($modal.hasClass('active') && !$modal.is(e.target) && $modal.has(e.target).length === 0) {
            $modal.removeClass('active');
        }
    });
    $('.presentation-modal').on('click', function (e) {
        e.stopPropagation();
    });

    $('body').on('click', '.modal-close', function () {
        $(this).closest('.modal').removeClass('active');
    });

    $('.presentation-close').on('click', function () {
        $(this).closest('.presentation-modal').removeClass('active');
    });

    //валидация формы - "заказать звонок"
    let callName = $('#call-name');
    let selectCallForm = $('#call-form .modal-select'); // выбираем элемент select
    let callPhone = $('#call-phone');

    $('#call-form').on('submit', function (e) {
        //валидация на обязательное заполнение поля
        function requiredValidation(input) {
            let lengthInput = input.val().trim().length;
            if (lengthInput === 0) {
                e.preventDefault();
                input.next().addClass('active');
            } else {
                input.next().removeClass('active');
            }
        }
        requiredValidation(callName);
        requiredValidation(callPhone);

        function selectValidation(select) {
            const selectedValue = select.val();
            let parent = select.closest('.modal-form__wrapper');
            let error = parent.find('.error');
            if (selectedValue === '') {
                e.preventDefault();
                error.addClass('active');
            } else {
                error.removeClass('active');
            }
        }
        selectValidation(selectCallForm);
    });

    //валидация формы - "оставить заявку"
    let bidName = $('#bid-name');
    let bidPhone = $('#bid-phone');
    let bidMail = $('#bid-mail');
    let selectBidForm = $('#bid-form .modal-select');

    $('#bid-form').on('submit', function (e) {
        //валидация на обязательное заполнение поля
        function requiredValidation(input) {
            let lengthInput = input.val().trim().length;
            if (lengthInput === 0) {
                e.preventDefault();
                input.next().addClass('active');
            } else {
                input.next().removeClass('active');
            }
        }
        requiredValidation(bidName);
        requiredValidation(bidPhone);
        requiredValidation(bidMail);

        function selectValidation(select) {
            const selectedValue = select.val();
            let parent = select.closest('.modal-form__wrapper');
            let error = parent.find('.error');
            if (selectedValue === '') {
                e.preventDefault();
                error.addClass('active');
            } else {
                error.removeClass('active');
            }
        }
        selectValidation(selectBidForm);
    });

    //валидация формы - "Анкета для сотрудников и волонтеров"
    let employeesItem = $('#employees-item');
    let employeesName = $('#employees-name');
    let employeesAge = $('#employees-age');
    let employeesActivity = $('#employees-activity');
    let employeesEducation = $('#employees-education');
    let employeesAddress = $('#employees-address');
    let employeesPhone = $('#employees-phone');
    let employeesMail = $('#employees-mail');
    let employeesExperience = $('#employees-experience');
    let employeesMessage = $('#employees-message');

    let selectEmployeesForm = $('#employees-form .modal-select'); // выбираем элемент select

    $('#employees-form').on('submit', function (e) {
        //валидация на обязательное заполнение поля
        function requiredValidation(input) {
            let lengthInput = input.val().trim().length;
            if (lengthInput === 0) {
                e.preventDefault();
                input.next().addClass('active');
            } else {
                input.next().removeClass('active');
            }
        }
        requiredValidation(employeesItem);
        requiredValidation(employeesName);
        requiredValidation(employeesAge);
        requiredValidation(employeesActivity);
        requiredValidation(employeesEducation);
        requiredValidation(employeesAddress);
        requiredValidation(employeesPhone);
        requiredValidation(employeesMail);
        requiredValidation(employeesExperience);
        requiredValidation(employeesMessage);

        function selectValidation(select) {
            const selectedValue = select.val();
            let parent = select.closest('.modal-form__wrapper');
            let error = parent.find('.error');
            if (selectedValue === '') {
                e.preventDefault();
                error.addClass('active');
            } else {
                error.removeClass('active');
            }
        }
        selectValidation(selectEmployeesForm);
    });

    //валидация формы - "Анкета для партнеров"
    let partnersItem = $('#partners-item');
    let partnersOrganization = $('#partners-organization');
    let partnersActivity = $('#partners-activity');
    let partnersAddress = $('#partners-address');
    let partnersPhone = $('#partners-phone');
    let partnersMail = $('#partners-mail');
    let partnersUrl = $('#partners-url');
    let partnersPerson = $('#partners-person');

    let selectPartnersForm = $('#partners-form .modal-select'); // выбираем элемент select

    $('#partners-form').on('submit', function (e) {
        //валидация на обязательное заполнение поля
        function requiredValidation(input) {
            let lengthInput = input.val().trim().length;
            if (lengthInput === 0) {
                e.preventDefault();
                input.next().addClass('active');
            } else {
                input.next().removeClass('active');
            }
        }
        requiredValidation(partnersItem);
        requiredValidation(partnersOrganization);
        requiredValidation(partnersActivity);
        requiredValidation(partnersAddress);
        requiredValidation(partnersPhone);
        requiredValidation(partnersMail);
        requiredValidation(partnersUrl);
        requiredValidation(partnersPerson);

        function selectValidation(select) {
            const selectedValue = select.val();
            let parent = select.closest('.modal-form__wrapper');
            let error = parent.find('.error');
            if (selectedValue === '') {
                e.preventDefault();
                error.addClass('active');
            } else {
                error.removeClass('active');
            }
        }
        selectValidation(selectPartnersForm);
    });

    //проверка инпута на изменения
    function inputChange(input) {
        input.on('input keyup', function (e) {
            if (input.val().trim().length > 0) {
                input.next().removeClass('active');
            }
        });
    }
    inputChange(callName);
    inputChange(callPhone);
    inputChange(bidName);
    inputChange(bidPhone);
    inputChange(bidMail);
    inputChange(employeesItem);
    inputChange(employeesName);
    inputChange(employeesAge);
    inputChange(employeesActivity);
    inputChange(employeesEducation);
    inputChange(employeesAddress);
    inputChange(employeesPhone);
    inputChange(employeesMail);
    inputChange(employeesExperience);
    inputChange(employeesMessage);
    inputChange(partnersItem);
    inputChange(employeesMessage);
    inputChange(partnersOrganization);
    inputChange(partnersActivity);
    inputChange(partnersAddress);
    inputChange(partnersPhone);
    inputChange(partnersMail);
    inputChange(partnersUrl);
    inputChange(partnersPerson);

    //нажатие на "развернуть подробную информацию" на странице услуг
    $('.service-btn').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).html('Развернуть подробную информацию');
        } else {
            $(this).addClass('active');
            $(this).html('Свернуть подробную информацию');
        }
        let parent = $(this).closest('.service-item');
        parent.find('.service-item__dropdown').slideToggle('slow');
    });

    $(document).on('click', '.service-item__price-link', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');

        if (innerWidth > 1130) {
            var top = $(id).offset().top - 300; // получаем координаты блока
        }
        if (innerWidth <= 1130) {
            var top = $(id).offset().top - 200; // получаем координаты блока
        }
        if (innerWidth <= 480) {
            var top = $(id).offset().top - 180; // получаем координаты блока
        }

        $('body, html').animate({ scrollTop: top }, 800); // плавно переходим к блоку
    });

    //нажатие на "развернуть подробную информацию" на странице БСО
    $('.bso-btn').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).html('Развернуть подробную информацию');
        } else {
            $(this).addClass('active');
            $(this).html('Свернуть подробную информацию');
        }
        let parent = $(this).closest('.bso-item');
        parent.find('.bso-item__dropdown').slideToggle('slow');
    });

    //
    $('.bso-info__item-open').on('click', function () {
        $(this).toggleClass('close');
        let parent = $(this).closest('.bso-info__item');
        parent.find('.bso-info__item-dropdown').slideToggle('slow');
    });

    //слайдер блок - "Полезные видеоматериалы"
    const usefulSwiper = new Swiper('.useful-swiper', {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '.useful-btn-next',
            prevEl: '.useful-btn-prev',
        },
        pagination: {
            el: '.useful-swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1131: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            701: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });

    //отследить изменения в инпуте "прикрепить файл"
    $(document).ready(function () {
        $('.modal-form__add-file input').on('change', function () {
            let parent = $(this).closest('.modal-form__add-file');
            let btn = parent.find('.modal-form__add-text');
            if ($(this).prop('files').length === 0) {
                parent.removeClass('active');
                btn.html('прикрепить файл');
            } else {
                parent.addClass('active');
                btn.html('файл прикреплен');
            }
        });
    });

    let animationMenu = $('.animation-menu');

    //нажатие на анимацию
    $('.animation-element').on('click', function () {
        animationMenu.toggleClass('close').toggleClass('open');
        if (animationMenu.hasClass('open')) {
            animationMenu.css('display', 'flex');
        }
        if (animationMenu.hasClass('close')) {
            setTimeout(() => {
                animationMenu.css('display', 'none');
            }, 400);
        }
    });

    $('.slider').each(function (index) {
        let $slider = $(this);
        let $nextBtn = $slider.find('.slider__button-next');
        let $prevBtn = $slider.find('.slider__button-prev');
        let $pagination = $slider.find('.slider-swiper-pagination');

        // Создаем слайдер БЕЗ автовоспроизведения
        let swiper = new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: $nextBtn[0],
                prevEl: $prevBtn[0],
            },
            effect: 'fade',
            pagination: {
                el: $pagination[0],
                clickable: true,
            },

            autoplay: false,

            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },

            on: {
                init: function () {
                    this.autoplay.stop();
                },
            },
        });

        let observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        swiper.autoplay.start();
                        console.log('Слайдер виден - автовоспроизведение запущено');
                    } else {
                        swiper.autoplay.stop();
                        console.log('Слайдер не виден - автовоспроизведение остановлено');
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: '0px',
            }
        );

        observer.observe(this);
    });

    const scopeSwiper = new Swiper('.scope-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.scope-btn-next',
            prevEl: '.scope-btn-prev',
        },
        breakpoints: {
            1171: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
        },
    });
    const partnersSwiper = new Swiper('.partners-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: {
            nextEl: '.partners-btn-next',
            prevEl: '.partners-btn-prev',
        },
        speed: 5000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            701: {
                spaceBetween: 16,
            },
        },
    });

    const aboutSwiper = new Swiper('.about-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.about-btn-next',
            prevEl: '.about-btn-prev',
        },
        pagination: {
            el: '.about-swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            701: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        },
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!partnersSwiper.autoplay.running) {
                        partnersSwiper.autoplay.start();
                    }
                } else {
                    if (partnersSwiper.autoplay.running) {
                        partnersSwiper.autoplay.stop();
                    }
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    const swiperElement = document.querySelector('.partners-swiper');
    if (swiperElement) {
        observer.observe(swiperElement);
    }
});

let animationElement = document.querySelector('.animation-element');

function animation() {
    let animationElementInner = document.querySelector('.animation-element__inner');
    let animationElementStatic = document.querySelector('.animation-element__static');
    let animationElementMovement = document.querySelector('.animation-element__movement');
    let animationElementMovementIcon = document.querySelectorAll('.animation-element__movement-icon');

    let animationElementMovementIconLast = document.querySelector('.last');

    setInterval(() => {
        animationElementInner.classList.add('no-static');
        animationElementInner.classList.remove('static');
        animationElementInner.classList.add('movement');
        animationElementInner.classList.remove('no-movement');

        if (animationElementInner.classList.contains('no-static')) {
            setTimeout(() => {
                animationElementStatic.style.display = 'none';
            }, 400);
        }

        if (animationElementInner.classList.contains('movement')) {
            animationElementMovement.style.display = 'flex';
        }
        let time = 700;
        for (let i = 0; i < animationElementMovementIcon.length; i++) {
            setTimeout(() => {
                animationElementMovementIcon[i].classList.add('active');
                if (animationElementMovementIcon[i].classList.contains('active')) {
                    if (animationElementMovementIcon[i].previousElementSibling) {
                        animationElementMovementIcon[i].previousElementSibling.classList.add('no-active');
                    }
                }
            }, i * time);
        }
    }, 5000);
    setInterval(() => {
        if (animationElementMovementIconLast.classList.contains('active')) {
            setTimeout(() => {
                for (let i = 0; i < animationElementMovementIcon.length; i++) {
                    animationElementMovementIcon[i].classList.remove('no-active');
                    animationElementMovementIcon[i].classList.remove('active');
                }
                animationElementInner.classList.add('no-movement');
                animationElementInner.classList.remove('movement');
                animationElementInner.classList.add('static');

                animationElementInner.classList.remove('no-static');

                animationElementStatic.style.display = 'block';
            }, 1000);
        }
    }, 100);
}
animation();

let animationElementClose = document.querySelector('.animation-element__close');
animationElement.addEventListener('click', function () {
    if (animationElementClose.classList.contains('no-active')) {
        animationElementClose.classList.remove('no-active');
        animationElementClose.classList.add('active');
        document.querySelector('.animation-element__inner').classList.add('no-active');
        document.querySelector('.animation-element__inner').classList.remove('active');
    } else {
        animationElementClose.classList.remove('active');
        animationElementClose.classList.add('no-active');
        document.querySelector('.animation-element__inner').classList.add('active');
        document.querySelector('.animation-element__inner').classList.remove('no-active');
    }
});
