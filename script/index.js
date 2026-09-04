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
const dailySolution_sl = document.querySelector('.daily_solution_product_wrap .swiper_wrapper > .swiper-slide');
console.log(dailySolution_wrap);


/* 썸네일 누르면 상품목록 펼쳐지기 */
//변수생성
const nightProductList = document.querySelector('.daily_solution_product_wrap .night > .product_list');
const makeupProductList = document.querySelector('.daily_solution_product_wrap .makeup > .product_list');
const skincareProductList = document.querySelector('.daily_solution_product_wrap .skincare > .product_list');
const perfumeProductList = document.querySelector('.daily_solution_product_wrap .perfume > .product_list');


const nightBigthum = document.querySelector('.daily_solution_product_wrap .night > .big_thum');
const makeupBigthum = document.querySelector('.daily_solution_product_wrap .makeup > .big_thum');
const skincareBigthum = document.querySelector('.daily_solution_product_wrap .skincare > .big_thum');
const perfumeBigthum = document.querySelector('.daily_solution_product_wrap .perfume > .big_thum');


const nightThumSummary = document.querySelector('.daily_solution_product_wrap .night > .big_thum > .summary');
const makeupThumSummary = document.querySelector('.daily_solution_product_wrap .makeup > .big_thum > .summary');
const skincareThumSummary = document.querySelector('.daily_solution_product_wrap .skincare > .big_thum > .summary');
const perfumeThumSummary = document.querySelector('.daily_solution_product_wrap .perfume > .big_thum > .summary');

const nightSlide = document.querySelector('.daily_solution_product_wrap .night');
const makeupSlide = document.querySelector('.daily_solution_product_wrap .makeup');
const skincareSlide = document.querySelector('.daily_solution_product_wrap .skincare');
const perfumeSlide = document.querySelector('.daily_solution_product_wrap .perfume');

console.log(nightSlide, makeupSlide, skincareSlide, perfumeSlide);

console.log(nightProductList, nightBigthum, makeupBigthum, skincareBigthum, perfumeBigthum);
console.log(nightThumSummary, makeupThumSummary, skincareThumSummary, perfumeThumSummary);

nightBigthum.addEventListener('click',()=>{
    nightSlide.classList.add('active');
    makeupSlide.classList.remove('active');
    skincareSlide.classList.remove('active');
    perfumeSlide.classList.remove('active');
    nightThumSummary.style.display = 'block';
    makeupThumSummary.style.display = 'none';
    skincareThumSummary.style.display = 'none';
    perfumeThumSummary.style.display = 'none';
    nightProductList.style.display ='block';
    makeupProductList.style.display ='none';
    skincareProductList.style.display ='none';
    perfumeProductList.style.display ='none';
})
makeupBigthum.addEventListener('click',()=>{
    nightSlide.classList.remove('active');
    makeupSlide.classList.add('active');
    skincareSlide.classList.remove('active');
    perfumeSlide.classList.remove('active');
    nightThumSummary.style.display = 'none';
    makeupThumSummary.style.display = 'block';
    skincareThumSummary.style.display = 'none';
    perfumeThumSummary.style.display = 'none';
})
skincareBigthum.addEventListener('click',()=>{
    nightSlide.classList.remove('active');
    makeupSlide.classList.remove('active');
    skincareSlide.classList.add('active');
    perfumeSlide.classList.remove('active');
    nightThumSummary.style.display = 'none';
    makeupThumSummary.style.display = 'none';
    skincareThumSummary.style.display = 'block';
    perfumeThumSummary.style.display = 'none';
    nightProductList.style.display ='none';
    makeupProductList.style.display ='none';
    skincareProductList.style.display ='block';
    perfumeProductList.style.display ='none';
})
perfumeBigthum.addEventListener('click',()=>{
    nightSlide.classList.remove('active');
    makeupSlide.classList.remove('active');
    skincareSlide.classList.remove('active');
    perfumeSlide.classList.add('active');
    nightThumSummary.style.display = 'none';
    makeupThumSummary.style.display = 'none';
    skincareThumSummary.style.display = 'none';
    perfumeThumSummary.style.display = 'block';
    nightProductList.style.display ='none';
    makeupProductList.style.display ='none';
    skincareProductList.style.display ='none';
    perfumeProductList.style.display ='block';
})




/* 데일리 솔루션 스와이퍼 설정 */
const dailySwiper = new Swiper ('.daily_solution_product_wrap',{
    slidesPerView : 'auto',
    allowTouchMove :false,
})

/* renutriv 부분 */
const renutrivProductWrap = document.querySelector('.renutriv_area .right .swiper-wrapper')
console.log(renutrivProductWrap);
for(let i = 0; i<10; i++){
    console.log(i);
    const renutrivProductSlide = document.createElement('div');
    renutrivProductSlide.classList.add('swiper-slide');
    renutrivProductSlide.innerHTML = `<a href="#" class="product_thum"><img src="${renutrivDb[i].thumnail}" alt=""></a>`
    renutrivProductSlide.innerHTML += `<a href="#" class="product_name">${renutrivDb[i].name}</a>`
    renutrivProductSlide.innerHTML += `<a href="#" class="product_price">${renutrivDb[i].price}</a>`
    renutrivProductWrap.appendChild(renutrivProductSlide);
}

const renutrivSwiper = new Swiper ('.renutriv_product_wrap',{
    slidesPerView : 4,
})