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

color1c0.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(8px)";
    colorResult.textContent = '1C0 쉘';
})
color1w1.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(53px)";
    colorResult.textContent = '1W1 본';
})

color1w2.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(96px)";
    colorResult.textContent = '1W2 샌드';
})
color1n0.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(142px)";
    colorResult.textContent = '1N0 포슬린';
})
color1n1.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(185px)";
    colorResult.textContent = '1N1 아이보리 누드';
})
color2c0.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(230px)";
    colorResult.textContent = '2C0 쿨바닐라';
})
color2w0.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(274px)";
    colorResult.textContent = '2W0 웜바닐라';
})
color3w1.addEventListener('click',()=>{
    colorPicker.style.transform = "translateX(318px)";
    colorResult.textContent = '3W1 토니';
})



/* ================옵션 선택시 펼쳐지기 */
const colorSelectBtn = document.querySelector('#color_select_btn');
const colorList = document.querySelector('.select_list');
const colorSelectArrow = document.querySelector('#color_select_btn .more img')
colorSelectBtn.addEventListener('click',()=>{
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
})



/* ======================옵션 선택 시 반영되기 */
const optionChecker = document.querySelectorAll('#color_select_btn span');
const option1c0 = document.querySelector('.select_list > li:nth-child(1)');
const option1w1 = document.querySelector('.select_list > li:nth-child(2)');
const option1w2 = document.querySelector('.select_list > li:nth-child(3)');
const option1n0 = document.querySelector('.select_list > li:nth-child(4)');
const option1n1 = document.querySelector('.select_list > li:nth-child(5)');
const option2c0 = document.querySelector('.select_list > li:nth-child(6)');
const option2w0 = document.querySelector('.select_list > li:nth-child(7)');
const option3w1 = document.querySelector('.select_list > li:nth-child(8)');

const optionResult = document.querySelector('.option_result');
const optionResultName = document.querySelector('.option_result .top .option_name');
const optionResultClose = document.querySelector('#option_result_close');

optionResultClose.addEventListener('click',()=>{
    optionResult.style.display = 'none';
})
console.log(optionChecker);

option1c0.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#DAB3A2";
    optionChecker[1].textContent = "1C0 쉘";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "1C0 쉘";
})
option1w1.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#CBA986";
    optionChecker[1].textContent = "1W1 본";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "1W1 본";
})
option1w2.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#CAA27F";
    optionChecker[1].textContent = "1W2 샌드";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "1W2 샌드";
})
option1n0.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#CBA98E";
    optionChecker[1].textContent = "1N0 포슬린";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "1N0 포슬린";
})
option1n1.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#FFC8A3";
    optionChecker[1].textContent = "1N1 아이보리 누드";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "1N1 아이보리 누드";
})
option2c0.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#CBA284";
    optionChecker[1].textContent = "2C0 쿨바닐라";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "2C0 쿨바닐라";
})
option2w0.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#C19D7D";
    optionChecker[1].textContent = "2W0 웜바닐라";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "2W0 웜바닐라";
})
option3w1.addEventListener('click',()=>{
    optionChecker[0].style.backgroundColor = "#C0966E";
    optionChecker[1].textContent = "3W1 토니";
    colorList.classList.toggle('active');
    colorSelectArrow.classList.toggle('active');
    optionResult.style.display = "block";
    optionResultName.textContent = "3W1 토니";
})



/* ================================수량 조절 */
const optionMinus = document.querySelector('#option_minus');
const optionMinusImg = document.querySelector('#option_minus > img');
const optionPlus = document.querySelector('#option_plus');
const optionNumber = document.querySelector('#option_number');
let optionChangeNum = Number(optionNumber.textContent);
const finalPrice = document.querySelector('.final_price');

const price = 90000;

console.log(typeof optionChangeNum);

function priceUpdate() {
    finalPrice.textContent = 'KRW ' + (price * optionChangeNum).toLocaleString();
}

optionPlus.addEventListener('click',()=>{
    optionChangeNum++;
    optionNumber.textContent = optionChangeNum;
    if(optionChangeNum >= 1){
        optionMinusImg.src = "./images/minus_active_icon.svg";
        iconUpdate();
        priceUpdate()
    }
})

optionMinus.addEventListener('click',()=>{
    if(optionChangeNum > 1){
        optionChangeNum--;
        optionNumber.textContent = optionChangeNum;
        iconUpdate();
        priceUpdate()
    }
})

function iconUpdate(){
    if (optionChangeNum > 1) {
        optionMinusImg.src = "./images/minus_active_icon.svg";
    } else {
        optionMinusImg.src = "./images/option_minus.svg";
    }
}