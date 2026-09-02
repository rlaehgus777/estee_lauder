/* 히어로배너 스와이퍼 */
const swiper = new Swiper('hero_wrap',{
    direction:'horizontal',
    slidesPerview: 1,
    speed:600,
    allowTouchMove: true, 
    
});

/* 변수모음 */
/* 내비게이션 변수 */
const logo = document.querySelector('.logo');
const navArea = document.querySelector('nav');
const navBest = document.querySelector('.best');
const navSkin = document.querySelector('.skin');
const navMakeup = document.querySelector('.makeup');
const navPerfume = document.querySelector('.perfume');
const navRenutriv = document.querySelector('.renutriv');
const navSetGift = document.querySelector('.setandgift');
const navBrand = document.querySelector('.brand');
const userInfo = document.querySelector('.user_info > img');
const search = document.querySelector('.search > img');
const cart = document.querySelector('.cart > img');
console.log(navArea, navMakeup);
/* 내비게이션 변수 종료 */

/* 내비게이션 make up호버 시 변경되는 기능 */
navMakeup.addEventListener('mouseenter',()=>{
    navArea.style.backgroundColor = '#fff';
    logo.style.color = '#111';
    navBest.style.color = '#000';
    navSkin.style.color = '#000';
    navMakeup.style.color = '#242A4F';
    navMakeup.style.fontWeight = '600';
    navPerfume.style.color = '#000';
    navRenutriv.style.color = '#000';
    navSetGift.style.color = '#000';
    navBrand.style.color = '#000';
    userInfo.style.filter = 'invert(1)'
    search.style.filter = 'invert(1)'
    cart.style.filter = 'invert(1)'
});

navMakeup.addEventListener('mouseleave',()=>{
    navArea.style.backgroundColor = 'transparent';
    logo.style.color = '#fff';
    navBest.style.color = '#fff';
    navSkin.style.color = '#fff';
    navMakeup.style.color = '#fff';
    navMakeup.style.fontWeight = '400';
    navPerfume.style.color = '#fff';
    navRenutriv.style.color = '#fff';
    navSetGift.style.color = '#fff';
    navBrand.style.color = '#fff';
});