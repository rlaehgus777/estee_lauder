/* 히어로배너 스와이퍼 */
const swiper = new Swiper('.hero_wrap',{
    direction:'horizontal',
    slidesPerView: 1,
    speed:600,
    allowTouchMove: true, 
    pagination: {
        el:'.swiper-pagination',
        type:'fraction',
    },
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }
});

/* 변수모음 */
/* 띠배너 변수 */
const tapeBanner = document.querySelector('.banner');
const tapeBannerClose = document.querySelector('.banner .content #close img');

console.log(tapeBanner, tapeBannerClose);

/* 내비게이션 변수 */
const logo = document.querySelector('.logo');
const navArea = document.querySelector('nav');
const navBest = document.querySelector('.best');
const navSkin = document.querySelector('.skin');
const navMakeup = document.querySelector('.every_wrap > header nav .menu li:nth-child(3)');
const navPerfume = document.querySelector('.perfume');
const navRenutriv = document.querySelector('.renutriv');
const navSetGift = document.querySelector('.setandgift');
const navBrand = document.querySelector('.brand');
const userInfo = document.querySelector('.user_info > img');
const search = document.querySelector('.search > img');
const cart = document.querySelector('.cart > img');

const mainHeader = document.querySelector('.every_wrap > header');
const hoverMenu = document.querySelector('.every_wrap > header > nav > .menu > li > .hover_menu_wrap');
console.log(navArea, navMakeup);
/* 내비게이션 변수 종료 */


/* 띠배너 닫기 기능 */
tapeBannerClose.addEventListener('click',()=>{
    tapeBanner.style.display = 'none';
    mainHeader.style.top = '0';
})

/* 마우스호버 시 메뉴 열기 */
navMakeup.addEventListener('mouseenter',()=>{
    mainHeader.classList.add('active');
    hoverMenu.style.display = 'block';
})

navMakeup.addEventListener('mouseleave',()=>{
    mainHeader.classList.remove('active');
    hoverMenu.style.display = 'none';
})


console.log(mainHeader, hoverMenu);

/* 베스트 상품목록 반복문 */
/* 변수 */
const productWrap = document.querySelector('#best_product .swiper-wrapper');

console.log(productWrap);

for(let i=1;i<10;i++){
    const bestProductDiv = document.createElement('div');
    bestProductDiv.classList.add('swiper-slide');
    bestProductDiv.innerHTML = `<a href="#"><img src="${bestProduct[i].image}"></img></a>`
    bestProductDiv.innerHTML += `<a href="#"><h4>${bestProduct[i].name}</h4>`;
    bestProductDiv.innerHTML += `<a href="#"><p>${bestProduct[i].price}</p>`;
    productWrap.appendChild(bestProductDiv);
}
/* 베스트 상품 부분 스와이퍼 */
const bestSwiper = new Swiper('#best_product',{
    direction:'horizontal',
    slidesPerView:4,
    allowTouchMove : true,
    spaceBetween : 20,
    pagination :{
        el:'.swiper-pagination',
        type :'progressbar',
    }
})
