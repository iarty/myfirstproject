//window.addEventListener('DOMContentLoaded', () => {
'use strict';
let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

let hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    };
};

let showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};

hideTabContent(1);

info.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});

//Timer

let deadline = '2019-04-25';

let getTimeRemaining = (time) => {
    let t = Date.parse(time) - Date.parse(new Date()),
        seconds = +Math.floor((t / 1000) % 60),
        minutes = +Math.floor((t / 1000 / 60) % 60),
        hours = +Math.floor((t / (1000 * 60 * 60)));

    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

let setClock = (id, time) => {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');


    let updTimer = () => {
        let t = getTimeRemaining(time);


        if (t.hours < 10) {
            hours.textContent = '0' + t.hours;
        } else {
            hours.textContent = t.hours;
        };

        if (t.minutes < 10) {
            minutes.textContent = '0' + t.minutes;
        } else {
            minutes.textContent = t.minutes;
        };

        if (t.seconds < 10) {
            seconds.textContent = '0' + t.seconds;
        } else {
            seconds.textContent = t.seconds;
        };



        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        };

    };
    let timeInterval = setInterval(updTimer, 1000);
};

setClock('timer', deadline);

//Modal window

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    exit = document.querySelector('.popup-close'),
    btn = document.querySelectorAll('.description-btn');

more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

exit.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

btn.forEach((e) => {
    e.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    // for(let i=0;i<btn.length;i++){
    //     btn[i].addEventListener('click', function () {
    //         overlay.style.display = 'block';
    //         this.classList.add('more-splash');
    //         document.body.style.overflow = 'hidden';
    // });
});

// //Form

// let form = document.querySelector('.main-form'),
//     form2 = document.getElementById('form'),
//     input = form.getElementsByTagName('input'),
//     statusMessage = document.createElement('div');
// statusMessage.classList.add('status');

// let FormWork = function (form) {
//     let message = {
//         loading: 'Загрузка...',
//         success: 'Спасибо! Скоро мы с вами свяжемся!',
//         failure: 'Что то пошло не так...'
//     };
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         form.appendChild(statusMessage);

//         let request = new XMLHttpRequest();
//         request.open('POST', 'http://httpbin.org/post');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//         let formData = new FormData(form);

//         let obj = {};
//         formData.forEach(function (value, key) {
//             obj[key] = value;
//         });
//         let json = JSON.stringify(obj);
//         request.send(json);

//         request.addEventListener('readystatechange', function () {
//             if (request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading;
//             } else if (request.readyState === 4 && request.status == 200) {
//                 statusMessage.innerHTML = message.success;
//             } else {
//                 statusMessage.innerHTML = message.failure;
//             };
//         });

//         for (let i = 0; i < input.length; i++) {
//             input[i].value = '';
//         };
//     });
// };

// FormWork(form);
// FormWork(form2);

let form = document.querySelector('.main-form'),
    formEnd = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
statusMessage.classList.add('status');

let formWork = function (elem) {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что то пошло не так...'
    };
    elem.addEventListener('submit', function (event) {
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {
            return new Promise(function (resolve, reject) {

                let request = new XMLHttpRequest();
                request.open('POST', 'http://httpbin.org/post');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                let obj = {};

                data.forEach(function (value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    };
                };

                request.send(json);

            });
        }; // End postData

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            };
        };
        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => {
                statusMessage.innerHTML = message.success;
            })
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput());
    });

};
formWork(form);
formWork(formEnd);

//slider
let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

function showSlides(index) {

    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    };

    slides.forEach((e) => {
        e.style.display = 'none'
    });

    dots.forEach((e) => {
        e.classList.remove('dot-active');
    });

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(index) {
    showSlides(slideIndex += index);
};

function currentSlide(index) {
    showSlides(slideIndex = index);
};

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});

dotsWrap.addEventListener('click', (e) => {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dot') && (e.target == dots[i - 1])) {
            currentSlide(i);
        }
    };
});

showSlides(slideIndex);

//calculator

let persons = document.querySelectorAll('.counter-block-input')[0],
    days = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    pSum = 0,
    dSum = 0,
    total = 0;


persons.addEventListener('input', function () {

    if (days.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        pSum = +this.value;
        total = (pSum + dSum) * 4000;
        totalValue.innerHTML = total;
    }
});

days.addEventListener('input', function () {
    if (persons.value == '' || days.value == '') {
        totalValue.innerHTML = 0;
    } else {
        dSum = +this.value;
        total = (pSum + dSum) * 4000;
        totalValue.innerHTML = total;
    }
});

place.addEventListener('input', function () {
    if (persons.value == '' || days.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});