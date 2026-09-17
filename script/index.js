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
const navSkin = document.querySelector('.every_wrap > header nav .menu > li:nth-child(2)');
const navMakeup = document.querySelector('.every_wrap > header nav .menu > li:nth-child(3)');
const navPerfume = document.querySelector('.perfume');
const navRenutriv = document.querySelector('.renutriv');
const navSetGift = document.querySelector('.setandgift');
const navBrand = document.querySelector('.brand');
const userInfo = document.querySelector('.user_info > img');
const search = document.querySelector('.search > img');
const cart = document.querySelector('.cart > img');

const mainHeader = document.querySelector('.every_wrap > header');
const hoverMenuMakeup = document.querySelector('.every_wrap > header > nav > .menu > li > .hover_menu_wrap_makeup');
const hoverMenuSkin = document.querySelector('.every_wrap > header > nav > .menu > li > .hover_menu_wrap_skin');
console.log(navArea, navMakeup);
/* 내비게이션 변수 종료 */
/* 내비게이션 모바일 버전 시작 */

const dimmed = document.querySelector('.dimmed');
const mobileHamburger = document.querySelector('#mobile_menu_btn'); /* 모바일 햄버거 버튼 */
const mobileMenuList = document.querySelector('.mobile_nav'); /* 모바일 메뉴 창 */
const mobileMenuClose = document.querySelector('.mobile_nav > .top > .icon > a:nth-child(3)'); /* 모바일 닫기버튼 */

const mobileSkinBtn = document.querySelector('.mobile_nav > li > #mobile_skin_btn'); /* 모바일 메뉴 스킨 버튼 */
const mobileMakeupBtn = document.querySelector('.mobile_nav > li > #mobile_makeup_btn'); /* 모바일 메뉴 스킨 버튼 */
const mobileRenutrivBtn = document.querySelector('.mobile_nav > li > #mobile_renutriv_btn'); /* 모바일 메뉴 스킨 버튼 */



const mobileSkinMenuActive = document.querySelectorAll('.mobile_nav > li:nth-child(3) ul'); /* 모바일 메뉴 스킨 메뉴 */
const mobileMakeupMenuActive = document.querySelectorAll('.mobile_nav > li:nth-child(4) ul'); /* 모바일 메뉴 스킨 메뉴 */
const mobileRenutrivMenuActive = document.querySelectorAll('.mobile_nav > li:nth-child(5) ul'); /* 모바일 메뉴 스킨 메뉴 */

const mobileSkinArrow = document.querySelector('#mobile_skin_btn > span');
const mobileMakeupArrow = document.querySelector('#mobile_makeup_btn > span');
const mobileRenutrivArrow = document.querySelector('#mobile_renutriv_btn > span');

console.log(mobileSkinMenuActive);

mobileHamburger.addEventListener('click',()=>{
    mobileMenuList.classList.add('active');
    dimmed.style.display = "block";
})

mobileMenuClose.addEventListener('click',()=>{
    mobileMenuList.classList.remove('active');
    dimmed.style.display = "none";
})

mobileSkinBtn.addEventListener('click',()=>{
    mobileSkinMenuActive.forEach(ul=>{
        ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    })
    mobileSkinArrow.classList.toggle('active');
})


mobileMakeupBtn.addEventListener('click',()=>{
    mobileMakeupMenuActive.forEach(ul=>{
        ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    })
    mobileMakeupArrow.classList.toggle('active');
})


mobileRenutrivBtn.addEventListener('click',()=>{
    mobileRenutrivMenuActive.forEach(ul=>{
        ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    })
    mobileRenutrivArrow.classList.toggle('active');
})


/* 띠배너 닫기 기능 */
tapeBannerClose.addEventListener('click',()=>{
    tapeBanner.style.display = 'none';
    mainHeader.style.top = '0';
})

/* 마우스호버 시 메뉴 열기 */
/* 호버 시 로고 색상 변경위한 변수 생성 */
const hoverLogo = document.querySelector('header > h1 > a > img');
console.log(hoverLogo);
navMakeup.addEventListener('mouseenter',()=>{
    mainHeader.classList.add('active');
    hoverMenuMakeup.style.display = 'block';
    hoverLogo.style.filter = 'invert(1)';
    navMakeup.classList.add('active');
})

navMakeup.addEventListener('mouseleave',()=>{
    mainHeader.classList.remove('active');
    hoverMenuMakeup.style.display = 'none';
    hoverLogo.style.filter = 'invert(0)';
    navMakeup.classList.remove('active');
})

navSkin.addEventListener('mouseenter',()=>{
    mainHeader.classList.add('active');
    hoverMenuSkin.style.display = 'block';
    hoverLogo.style.filter = 'invert(1)';
    navSkin.classList.add('active');
})

navSkin.addEventListener('mouseleave',()=>{
    mainHeader.classList.remove('active');
    hoverMenuSkin.style.display = 'none';
    hoverLogo.style.filter = 'invert(0)';
    navSkin.classList.remove('active');
})


/* 베스트 상품목록 반복문 */
/* 변수 */
const productWrap = document.querySelector('#best_product_id .swiper-wrapper');

console.log(productWrap);

for(let i=1;i<10;i++){
    const bestProductDiv = document.createElement('div');
    bestProductDiv.classList.add('swiper-slide');
    bestProductDiv.innerHTML = `<a href="/estee_lauder/product_page.html"><img src="${bestProduct[i].image}"></img></a>`
    bestProductDiv.innerHTML += `<a href="/estee_lauder/product_page.html"><h4>${bestProduct[i].name}</h4>`;
    bestProductDiv.innerHTML += `<a href="/estee_lauder/product_page.html"><p>${bestProduct[i].price}</p>`;
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
    //breakpointsInverse: true,
    breakpoints : {
        1680 : {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 4,
        },
        1280:{
            slidsPerView :4,
        },
        1000: {
            slidesPerView: 3,
        }
    },
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





/* 데일리 솔루션 스와이퍼 설정 */
const daily_solution_wrap = document.querySelector('.daily_solution_product_wrap');
const mq = window.matchMedia('(min-width:1680px)');
dailyFunc(mq);
mq.addEventListener('change',dailyFunc);

function dailyFunc(e){
    daily_solution_wrap.classList.toggle('active', e.matches);

    const daily_slide = daily_solution_wrap.querySelectorAll('.swiper-slide');
    for(let dailyChecking of daily_slide){
            dailyChecking.style.transition = 'all 0.4s';
            dailyChecking.addEventListener('click',()=>{
                for(let dailyRemove of daily_slide) dailyRemove.classList.remove('swiper-slide-active');
                    dailyChecking.classList.add('swiper-slide-active');
                    console.log('클릭');
                })
            }
        }

const dailySwiper = new Swiper(daily_solution_wrap, {
    slidesPerView :1,
    spaceBetween :0,
    pagination:{
        el:'.daily_solution_wrap > .swiper-pagination',
        type:'progressbar',
    },
    breakpoints :{
        1680:{
            slidesPerView:'auto',
            spaceBetween:10,
            },
        1480:{
            slidesPerView:2,
            spaceBetween:30,
            },
        1023:{
            slidesPerView:1,
            spaceBetween:10,
            }
            }
        })
/* nightBigthum.addEventListener('click',()=>{
    nightSlide.classList.add('swiper-slide-active');
    makeupSlide.classList.remove('swiper-slide-active');
    skincareSlide.classList.remove('swiper-slide-active');
    perfumeSlide.classList.remove('swiper-slide-active');
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
    nightSlide.classList.remove('swiper-slide-active');
    makeupSlide.classList.add('swiper-slide-active');
    skincareSlide.classList.remove('swiper-slide-active');
    perfumeSlide.classList.remove('swiper-slide-active');
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
    nightSlide.classList.remove('swiper-slide-active');
    makeupSlide.classList.remove('swiper-slide-active');
    skincareSlide.classList.add('swiper-slide-active');
    perfumeSlide.classList.remove('swiper-slide-active');
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
    nightSlide.classList.remove('swiper-slide-active');
    makeupSlide.classList.remove('swiper-slide-active');
    skincareSlide.classList.remove('swiper-slide-active');
    perfumeSlide.classList.add('swiper-slide-active');
    nightThumSummary.style.display = 'none';
    makeupThumSummary.style.display = 'none';
    skincareThumSummary.style.display = 'none';
    perfumeThumSummary.style.display = 'block';
    nightProductList.style.display ='none';
    makeupProductList.style.display ='none';
    skincareProductList.style.display ='none';
    perfumeProductList.style.display ='flex';
}) */







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
    slidesPerView : 3.5,
    spaceBetween: 30,
    allowTouchMove : true,
    speed:3000,
    autoplay: {
        delay: 1,
    },
    loop: true,
})
/* if (renutrivProductWrap && typeof renutrivDb !== 'undefined') {
    // 1. innerHTML을 매번 더하지 않고 HTML 문자열을 만들어 한 번에 삽입 (성능 및 레이아웃 유지)
    let slideHTML = '';
    
    // renutrivDb 배열 길이 범위 내에서 안전하게 반복
    const count = Math.min(10, renutrivDb.length); 
    
    for (let i = 0; i < count; i++) {
        slideHTML += `
            <div class="swiper-slide">
                <a href="#" class="product_thum"><img src="${renutrivDb[i].thumnail}" alt=""></a>
                <a href="#" class="product_name">${renutrivDb[i].name}</a>
                <a href="#" class="product_price">${renutrivDb[i].price}</a>
            </div>
        `;
    }
    
    renutrivProductWrap.innerHTML = slideHTML;
} */



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