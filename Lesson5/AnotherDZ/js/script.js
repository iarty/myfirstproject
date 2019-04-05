let btn = document.querySelectorAll('.menu-item'),
    li = document.createElement('li'),
    ul = document.querySelector('.menu');
adv = document.querySelectorAll('.column'),
    ads = document.querySelector('.adv'),
    id = document.getElementById('title'),
    text = document.getElementById("prompt");

li.classList.add('menu-item');
ul.appendChild(li);
ul.insertBefore(btn[1], btn[3]);
li.innerHTML = 'Пятый пункт'; 
document.body.style.background = "url(../AnotherDZ/img/apple_true.jpg)";
id.innerHTML = 'Мы продаем только подлинную технику Apple';
adv[1].removeChild(ads);
let comment = prompt("Как вы относитесь к технике Apple?");
text.innerHTML = comment;
console.log(comment);
console.log(text);