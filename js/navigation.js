const navItems = document.querySelectorAll(".li1");
const submenuBox = document.querySelectorAll(".expandBox");
// const findBox = document.getElementById("searchB");

navItems[0].addEventListener("click", function () {
    submenuBox[1].classList.add("expandBox");
    submenuBox[2].classList.add("expandBox");
    submenuBox[3].classList.add("expandBox");
    submenuBox[0].classList.toggle("expandBox");
})
navItems[1].addEventListener("click", function () {
    submenuBox[0].classList.add("expandBox");
    submenuBox[2].classList.add("expandBox");
    submenuBox[3].classList.add("expandBox");
    submenuBox[1].classList.toggle("expandBox");
})
navItems[2].addEventListener("click", function () {
    submenuBox[0].classList.add("expandBox");
    submenuBox[1].classList.add("expandBox");
    submenuBox[3].classList.add("expandBox");
    submenuBox[2].classList.toggle("expandBox");
})
navItems[3].addEventListener("click", function () {
    submenuBox[0].classList.add("expandBox");
    submenuBox[1].classList.add("expandBox");
    submenuBox[2].classList.add("expandBox");
    submenuBox[3].classList.toggle("expandBox");
})
// findBox.addEventListener("click", function () {
//     submenuBox[0].classList.add("expandBox");
//     submenuBox[1].classList.add("expandBox");
//     submenuBox[2].classList.add("expandBox");
//     submenuBox[3].classList.add("expandBox");
//     findBox.classList.toggle("expandBox");
// })
// navigation Product--------------------------------------
const section2 = document.querySelectorAll(".secondcol");
const section3 = document.querySelectorAll(".thirdcol");
const section4 = document.querySelectorAll(".forthcol");
const mainBox = document.querySelectorAll(".firstcol");
const game = document.querySelector("#game");
const content = document.querySelector("#content");
const business = document.querySelector("#business");
const accessory = document.querySelector("#accessory");
function hideAll() {
    section2[0].classList.add("displayHide");
    section2[1].classList.add("displayHide");
    section2[2].classList.add("displayHide");
    section2[3].classList.add("displayHide");

    section3[0].classList.add("displayHide");
    section3[1].classList.add("displayHide");
    section3[2].classList.add("displayHide");
    section3[3].classList.add("displayHide");

    section4[0].classList.add("displayHide");
    section4[1].classList.add("displayHide");
    section4[2].classList.add("displayHide");
    section4[3].classList.add("displayHide");
}
function removeRed() {
    game.classList.remove("boldp");
    content.classList.remove("boldp");
    business.classList.remove("boldp");
    accessory.classList.remove("boldp");
}
mainBox[0].addEventListener("click", function () {
    hideAll();
    removeRed();
    game.classList.add("boldp");
    section2[0].classList.remove("displayHide");
    section3[0].classList.remove("displayHide");
    section4[0].classList.remove("displayHide");


})
mainBox[2].addEventListener("click", function () {
    hideAll();
    removeRed();
    content.classList.add("boldp");
    section2[1].classList.remove("displayHide");
    section3[1].classList.remove("displayHide");
    section4[1].classList.remove("displayHide");

})
mainBox[3].addEventListener("click", function () {
    hideAll();
    removeRed();
    business.classList.add("boldp");
    section2[2].classList.remove("displayHide");
    section3[2].classList.remove("displayHide");
    section4[2].classList.remove("displayHide");

})
mainBox[4].addEventListener("click", function () {
    hideAll();
    removeRed();
    accessory.classList.add("boldp");
    section2[3].classList.remove("displayHide");
    section3[3].classList.remove("displayHide");
    section4[3].classList.remove("displayHide");

})
// 8888888888888888888888888888888888888888888888888888888888888888888888part2
const EV1 = document.querySelector("#EV");
const server2 = document.querySelector("#server");
const automotive3 = document.querySelector("#Automotive");
const funtoro4 = document.querySelector("#funtoro");
const AMR5 = document.querySelector("#AMR");
const industry6 = document.querySelector("#Industrial");
const rugged7 = document.querySelector("#Rugged");
const BTNS = document.querySelectorAll(".AloTfirstcol");

function hideAll2() {
    EV1.classList.add("displayHide");
    server2.classList.add("displayHide");
    automotive3.classList.add("displayHide");
    funtoro4.classList.add("displayHide");
    AMR5.classList.add("displayHide");
    industry6.classList.add("displayHide");
    rugged7.classList.add("displayHide");
}

function removeRed2() {
    BTNS[0].classList.remove("boldp");
    BTNS[1].classList.remove("boldp");
    BTNS[2].classList.remove("boldp");
    BTNS[3].classList.remove("boldp");
    BTNS[4].classList.remove("boldp");
    BTNS[5].classList.remove("boldp");
    BTNS[6].classList.remove("boldp");
}

BTNS[0].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[0].classList.add("boldp");
    EV1.classList.remove("displayHide");
})
BTNS[1].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[1].classList.add("boldp");
    server2.classList.remove("displayHide");
})
BTNS[2].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[2].classList.add("boldp");
    automotive3.classList.remove("displayHide");
})
BTNS[3].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[3].classList.add("boldp");
    funtoro4.classList.remove("displayHide");
})
BTNS[4].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[4].classList.add("boldp");
    AMR5.classList.remove("displayHide");
})
BTNS[5].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[5].classList.add("boldp");
    industry6.classList.remove("displayHide");
})
BTNS[6].addEventListener("click", function () {
    hideAll2();
    removeRed2();
    BTNS[6].classList.add("boldp");
    rugged7.classList.remove("displayHide");
})
// 00000000000000000000000000000000000000000000000000000000000000000000
