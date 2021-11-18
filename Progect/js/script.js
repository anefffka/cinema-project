window.onload = function () {

const schemeSvg = document.querySelector('.scheme__svg');
const totalPriceTag = document.querySelector('.price__total');
let cost = 250;
let totalPrice = 0;
const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

schemeSvg.addEventListener('click', (e) => {
    if (!e.target.classList.contains("booked")){
        e.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
})

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
})
}