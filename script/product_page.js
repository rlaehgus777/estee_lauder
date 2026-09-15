//product_page.js

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


