// HEADER - DROPDOWN
document.querySelectorAll(".dropdown-simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
        /* чтобы изначально ползунок был виден */
        autoHide: false,
        /* с помощью этого значения вы можете управлять высотой ползунка*/
        scrollbarMaxSize: 28,
    });
})

const btns = document.querySelectorAll(".menu-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
    item.addEventListener("click", function() {
        let DropThis = this.parentElement.querySelector(".dropdown");
        dropdowns.forEach(el => {
            if (el != DropThis) {
                el.classList.remove(activeClassdropdowns)
            }
        });
        btns.forEach(el => {
            if (el != this) {
                el.classList.remove(activeClassbtns)
            }
        });
        DropThis.classList.toggle(activeClassdropdowns);
        this.classList.toggle(activeClassbtns);
    })
})

// SMOOTHED SCROLL//
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $(document).ready(function() {
        document.querySelector('#menu').classList.toggle('is-active');
    });

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;

});


// Mobile Search
document.querySelector(".mobile-search-open").addEventListener("click", function() {
    document.querySelector(".mobile-form").classList.add("mobile-form__active");
    this.classList.add("active");
})

document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".mobile-form");
    if (!target.closest(".container-top")) {
        form.classList.remove("mobile-form__active");
        form.querySelector("input").value = "";
        document.querySelector(".mobile-search-open").classList.remove("active")
    }
})

document.querySelector('#mobile-search-close').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector(".mobile-form").classList.remove("mobile-form__active")
    document.querySelector(".mobile-search-open").classList.remove("active")
})


// BURGER

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger-x').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})

// GALLERY - CHIOCES 
const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,

});

// CATALOG - ACCORDION - RESIZE
$(function() {
    $("#catalog-accordion").accordion({
        heightStyle: "content"
    });
    $("#catalog-accordion-resizer").resizable({
        minHeight: 140,
        maxWidth: 800,
        resize: function() {
            $("#catalog-accordion").accordion("refresh");
        }
    });
});

// CATALOG - ACCORDION - SCRIPT
function myFunction2() {
    document.getElementById("dg").style.display = "block";
    document.getElementById("img-blank").style.display = "none";
}

function myFunction1() {

    document.getElementById("img-blank").style.display = "block";
    document.getElementById("dg").style.display = "none";
}
window.onload = function() {
    $("#load-dg").click();
}


document.addEventListener('DOMContentLoaded', () => {

    let myBtns = document.querySelectorAll('.catalog-content__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
            myBtns.forEach(b => b.classList.remove('ccb-is-active'));
            btn.classList.add('ccb-is-active');
        });

    });

});

// TIPPY - CUSTOM
tippy('#projectsButton1', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264,
    theme: 'violet',
    offset: [0, 0],

});
tippy('#projectsButton2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264,
    theme: 'violet',
    offset: [0, 0],
});
tippy('#projectsButton3', {
    content: 'В стремлении повысить качество',
    maxWidth: 264,
    theme: 'violet',
    offset: [0, 0],
});

// Swiper Hero
var swiper1 = new Swiper('.hero-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
        delay: 2000
    },
    effect: "fade",
});
// Swiper Gallery
var swiper2 = new Swiper('.gallery-swiper', {
    direction: 'horizontal',

    breakpoints: {
        575: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 38
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: 90
        },
        1550: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    zoom: {
        maxRatio: 2,
        toggle: true,
    },
    pagination: {
        clickable: true,
        el: '.gallery-swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery-swiper-button-next',
        prevEl: '.gallery-swiper-button-prev',
    },

});
// Swiper Events
var swiper3 = new Swiper('.events-swiper', {
    direction: 'horizontal',

    pagination: {
        el: '.events-swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    navigation: {
        nextEl: '.events-swiper-button-next',
        prevEl: '.events-swiper-button-prev',
    },
});
// Swiper Projects
var swiper4 = new Swiper('.projects-swiper', {
    direction: 'horizontal',

    pagination: {
        el: '.projects-swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    navigation: {
        nextEl: '.projects-swiper-button-next',
        prevEl: '.projects-swiper-button-prev',
    },
});

// VALIDATE + PHONE MASK
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
new JustValidate('.contacts-inputs', {

    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLwngth: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        },

    },
    submitHandler: function(form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.onreadystatechange === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        form.reset();
    },
    messages: {

        name: {
            required: 'Поле не заполнено',
            minLength: 'Не корректное имя'
        },

        tel: {
            required: 'Поле не заполнено',
            function: 'Не корректный номер'
        },
    },
});

// YANDEX - CUSTOMAZED
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75846806898367, 37.60108849999989],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14

    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [54, 37] // координаты точки
        }
    });
    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/Yandex_mark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-20, -5]
    });

    // Размещение геообъекта на карте.

    myMap.geoObjects.add(myPlacemark);
}

// MAILTO - FORM JS
//$(document).ready(function() {
//    $('#btn_send').click(function() {
//        $('#form_send').attr('action',
//            'mailto:blanchart@mail.ru?subject=request from ' + $('#name_send').val() +
//            '&body=Name: ' + $('#name_send').val() + ' telephone:' + $('#phone_send').val());
//        $('#form_send').submit();
//    });
//});