//product_page.js

/* cta버튼 */
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

/* 띠배너 닫기 */
const tapeBanner = document.querySelector('.banner');
const tapeBannerClose = document.querySelector('.banner .content #close img');
tapeBannerClose.addEventListener('click',()=>{
    tapeBanner.style.display = 'none';
    mainHeader.style.top = '0';
})

/* 내비게이션 호버 시 메뉴 열림 */
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
const hoverLogo = document.querySelector('header > h1 > a > img');
const mainHeader = document.querySelector('.every_wrap > header');
const hoverMenuMakeup = document.querySelector('.every_wrap > header > nav > .menu > li > .hover_menu_wrap_makeup');
const hoverMenuSkin = document.querySelector('.every_wrap > header > nav > .menu > li > .hover_menu_wrap_skin');
console.log(navArea, navMakeup);
console.log(hoverLogo);
navMakeup.addEventListener('mouseenter',()=>{
    mainHeader.classList.add('active');
    hoverMenuMakeup.style.display = 'block';
    navMakeup.classList.add('active');
})

navMakeup.addEventListener('mouseleave',()=>{
    mainHeader.classList.remove('active');
    hoverMenuMakeup.style.display = 'none';
    navMakeup.classList.remove('active');
})

navSkin.addEventListener('mouseenter',()=>{
    mainHeader.classList.add('active');
    hoverMenuSkin.style.display = 'block';
    navSkin.classList.add('active');
})

navSkin.addEventListener('mouseleave',()=>{
    mainHeader.classList.remove('active');
    hoverMenuSkin.style.display = 'none';
    navSkin.classList.remove('active');
})

/* 모바일 내비게이션 */


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


// =========================== small thum에 마우스 올렸을때 big thum으로 교체
const smallThum1 = document.querySelector('.sm_1');
const smallThum2 = document.querySelector('.sm_2');
const smallThum3 = document.querySelector('.sm_3');
const bigThum = document.querySelector('.big_thum');
console.log(smallThum1, smallThum2, smallThum3, bigThum);

smallThum1.addEventListener('mouseenter',()=>{
    bigThum.style.backgroundImage = "url(./images/product_small_thum1.jpg)";
    bigThum.style.backgroundRepeat = "no-repeat";
    bigThum.style.backgroundSize = "cover";
    bigThum.style.backgroundPosition = "center";
});
smallThum2.addEventListener('mouseenter',()=>{
    bigThum.style.backgroundImage = "url(./images/product_small_thum2.jpg)";
    bigThum.style.backgroundRepeat = "no-repeat";
    bigThum.style.backgroundSize = "cover";
    bigThum.style.backgroundPosition = "center";
});
smallThum3.addEventListener('mouseenter',()=>{
    bigThum.style.backgroundImage = "url(./images/product_small_thum3.jpg)";
    bigThum.style.backgroundRepeat = "no-repeat";
    bigThum.style.backgroundSize = "cover";
    bigThum.style.backgroundPosition = "center";
});




/* ================================================================================== */
/* 자세히 보기 클릭 시 내용 노출 */
const infoSummary = document.querySelector('.product_info .top .info');
const infoSummaryBtn = document.querySelector('#more_summary');
const infoSummaryBtnImg = document.querySelector('#more_summary > img');
console.log(infoSummaryBtn, infoSummary);
infoSummaryBtn.addEventListener('click',()=>{  
    const isActive = infoSummary.classList.toggle('active');
    infoSummaryBtn.childNodes[0].textContent = isActive ? '접기' : '자세히 보기';
})



/* =============================================================================================== */
/* 컬러피커 움직임 구현 */
const color1c0 = document.querySelector('.middle > .color_chip li:nth-child(1)');
const color1w1 = document.querySelector('.middle > .color_chip li:nth-child(2)');
const color1w2 = document.querySelector('.middle > .color_chip li:nth-child(3)');
const color1n0 = document.querySelector('.middle > .color_chip li:nth-child(4)');
const color1n1 = document.querySelector('.middle > .color_chip li:nth-child(5)');
const color2c0 = document.querySelector('.middle > .color_chip li:nth-child(6)');
const color2w0 = document.querySelector('.middle > .color_chip li:nth-child(7)');
const color3w1 = document.querySelector('.middle > .color_chip li:nth-child(8)');
const colorPicker = document.querySelector('#color_select_form .middle .color_picker img');
const colorResult = document.querySelector('#color_select_form > .middle .option_info');

color1w1.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(53px)";
    colorResult.textContent = '1W1 본';

})



/* ================옵션 선택 */
const colorSelectBtn = document.querySelector('#color_select_btn');
const colorList = document.querySelector('.select_list');
colorSelectBtn.addEventListener('click',()=>{
    colorList.classList.toggle('active');
})