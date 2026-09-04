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
const logo = document.querySelector('header > h1 > .logo');
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
const productWrap = document.querySelector('#best_product_id .swiper-wrapper');

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
const bestSwiper = new Swiper('#best_product_id',{
    direction:'horizontal',
    slidesPerView:4,
    allowTouchMove : true,
    spaceBetween : 20,
    pagination :{
        el:'.best_product .swiper-pagination',
        type :'progressbar',
    }
})


// !!베스트 부분에 버튼들 클릭 시 색상변경!!
//변수
const skinCareBtn = document.querySelector('.btn_group > .skincare');
const makeupBtn = document.querySelector('.btn_group > .makeup');
const perfumeBtn = document.querySelector('.btn_group >.perfume');
const setandgiftBtn = document.querySelector('.btn_group > .setandgift');

/* 메이크업 버튼 이벤트 */
skinCareBtn.addEventListener('click',()=>{
    skinCareBtn.classList.add('active');
    perfumeBtn.classList.remove('active');
    setandgiftBtn.classList.remove('active');
    makeupBtn.classList.remove('active');
})
makeupBtn.addEventListener('click',()=>{
    skinCareBtn.classList.remove('active');
    perfumeBtn.classList.remove('active');
    setandgiftBtn.classList.remove('active');
    makeupBtn.classList.add('active');
})
perfumeBtn.addEventListener('click',()=>{
    skinCareBtn.classList.remove('active');
    perfumeBtn.classList.add('active');
    setandgiftBtn.classList.remove('active');
    makeupBtn.classList.remove('active');
})
setandgiftBtn.addEventListener('click',()=>{
    skinCareBtn.classList.remove('active');
    perfumeBtn.classList.remove('active');
    setandgiftBtn.classList.add('active');
    makeupBtn.classList.remove('active');
})
console.log(skinCareBtn, makeupBtn, perfumeBtn, setandgiftBtn );


//데일리 솔루션 영역 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const dailySolution_wrap = document.querySelector('.daily_solution_product_wrap');
const dailySolution_sl = document.querySelector('.daily_solution_product_swiper_wrapper > .swiper-slide');
console.log(dailySolution_wrap);


/* 썸네일 누르면 상품목록 펼쳐지기 */
const daily_night_product_list = document.querySelector('.daily_solution_product_swiper_wrapper > .product_list');
const daily_night_bigThum = document.querySelector('.daily_solution_product_swiper_wrapper > .night > .big_thum');
console.log(daily_night_bigThum, daily_night_product_list);


daily_night_bigThum.addEventListener('click',{

})

/* 데일리 솔루션 스와이퍼 설정 */
const dailySwiper = new Swiper ('.daily_solution_product_wrap',{
    slidesPerview : 5 ,
})
