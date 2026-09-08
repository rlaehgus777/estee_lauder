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
        },
    }
);

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
    slidesPerView:2,
    allowTouchMove : true,
    spaceBetween : 20,
    pagination :{
        el:'.best_product .swiper-pagination',
        type :'progressbar',
    },
    breakpoints : {
        1280 : {
            slidesPerView: 4,
        },
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
    nightThumSummary.style.display = '';
    makeupThumSummary.style.display = 'none';
    skincareThumSummary.style.display = 'none';
    perfumeThumSummary.style.display = 'none';
    nightProductList.style.display ='flex';
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
    nightProductList.style.display ='none';
    makeupProductList.style.display ='flex';
    skincareProductList.style.display ='none';
    perfumeProductList.style.display ='none';
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
    skincareProductList.style.display ='flex';
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
    perfumeProductList.style.display ='flex';
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
    slidesPerView : 3,
    spaceBetween: 30,
    speed:3000,
    autoplay: {
        delay: 1,
    },
    loop: true,
})



/* 헤리티지 부분 마우스 이벤트 */

const heritageHoverArea1 = document.querySelector('.step1');
const heritageHoverArea2 = document.querySelector('.step2');
const heritageHoverArea3 = document.querySelector('.step3');
const heritageHoverArea4 = document.querySelector('.step4');
const heritageHoverArea5 = document.querySelector('.step5');
const heritageHoverArea6 = document.querySelector('.step6');

const heritageContents1 = document.querySelector('.step1 > .contents');
const heritageContents2 = document.querySelector('.step2 > .contents');
const heritageContents3 = document.querySelector('.step3 > .contents');
const heritageContents4 = document.querySelector('.step4 > .contents');
const heritageContents5 = document.querySelector('.step5 > .contents');
const heritageContents6 = document.querySelector('.step6 > .contents');

const heritageHoverContents1 = document.querySelector('.step1 > .contents_hover');
const heritageHoverContents2 = document.querySelector('.step2 > .contents_hover');
const heritageHoverContents3 = document.querySelector('.step3 > .contents_hover');
const heritageHoverContents4 = document.querySelector('.step4 > .contents_hover');
const heritageHoverContents5 = document.querySelector('.step5 > .contents_hover');
const heritageHoverContents6 = document.querySelector('.step6 > .contents_hover');



console.log(heritageContents1, heritageContents2, heritageContents3, heritageContents4, heritageContents5, heritageContents6);

console.log(heritageHoverArea1, heritageHoverArea2, heritageHoverArea3, heritageHoverArea4, heritageHoverArea5, heritageHoverArea6);

heritageHoverArea1.addEventListener('mouseenter',()=>{
    heritageContents1.style.opacity ='0';
    heritageHoverContents1.style.transition = 'opacity 0.5s ease';
    heritageHoverContents1.style.opacity ='1';
})
heritageHoverArea1.addEventListener('mouseleave',()=>{
        heritageContents1.style.opacity ='1';
    heritageHoverContents1.style.opacity ='0';
})


heritageHoverArea2.addEventListener('mouseenter',()=>{
    heritageContents2.style.opacity ='0';
    heritageHoverContents2.style.transition = 'opacity 0.5s ease';
    heritageHoverContents2.style.opacity ='1';
})
heritageHoverArea2.addEventListener('mouseleave',()=>{
        heritageContents2.style.opacity ='1';
    heritageHoverContents2.style.opacity ='0';
})



heritageHoverArea3.addEventListener('mouseenter',()=>{
    heritageContents3.style.opacity ='0';
    heritageHoverContents3.style.transition = 'opacity 0.5s ease';
    heritageHoverContents3.style.opacity ='1';
})
heritageHoverArea3.addEventListener('mouseleave',()=>{
    heritageContents3.style.opacity ='1';
    heritageHoverContents3.style.opacity ='0';
})


heritageHoverArea4.addEventListener('mouseenter',()=>{
    heritageContents4.style.opacity ='0';
    heritageHoverContents4.style.transition = 'opacity 0.5s ease';
    heritageHoverContents4.style.opacity ='1';
})
heritageHoverArea4.addEventListener('mouseleave',()=>{
    heritageContents4.style.opacity ='1';
    heritageHoverContents4.style.opacity ='0';
})


heritageHoverArea5.addEventListener('mouseenter',()=>{
    heritageContents5.style.opacity ='0';
    heritageHoverContents5.style.transition = 'opacity 0.5s ease';
    heritageHoverContents5.style.opacity ='1';
})
heritageHoverArea5.addEventListener('mouseleave',()=>{
    heritageContents5.style.opacity ='1';
    heritageHoverContents5.style.opacity ='0';
})


heritageHoverArea6.addEventListener('mouseenter',()=>{
    heritageContents6.style.opacity ='0';
    heritageHoverContents6.style.transition = 'opacity 0.5s ease';
    heritageHoverContents6.style.opacity ='1';
})
heritageHoverArea6.addEventListener('mouseleave',()=>{
    heritageContents6.style.opacity ='1';
    heritageHoverContents6.style.opacity ='0';
})




/* 마지막행 브랜드로고 슬라이드 */
const brandSwiper = new Swiper ('.brand_wrap', {
    slidesPerView: 5,
    speed: 3000,
    autoplay: {
        delay:1,
    },
    loop: 'true'
})



/* cta 버튼 */
const ctaNonActive = document.querySelector('#cta_non_active');
const ctaActive = document.querySelector('.cta_active');
const ctaActiveClose = document.querySelector('#cta_close');

ctaNonActive.addEventListener('click',()=>{
    ctaNonActive.style.display = "none";
    ctaActive.style.display = "flex";
})

ctaActiveClose.addEventListener('click',()=>{
    ctaNonActive.style.display = "block";
    ctaActive.style.display = "none";
})