// To local Site+++++++++++++++++++++++++++++++++++++++
const CloseBTN = document.querySelector("#closeLocal");
const LocalBox = document.querySelector("#LocalWebsite");
const Dumy = document.querySelector("#bee");
CloseBTN.addEventListener("click", function () {
    LocalBox.classList.add("localToZiro");
    Dumy.classList.add("displayHide");
})
// ----------------------------------------------------

// setting ++++++++++++++++++++++++++++++++++
const Setting = document.querySelector(".setting");
const SettingBox = document.querySelector(".settingBox");
const Close = document.querySelector(".CloseInSettingBox");

Setting.addEventListener("click", function () {
    SettingBox.classList.toggle("settingToZiro");
})
Close.addEventListener("click", function () {
    SettingBox.classList.remove("settingToZiro");
})


// ----------------------------------------------------------------

// switch-button ++++++++++++++++++++++++++++++++
const Button1 = document.querySelectorAll(".switch-button");
const Switch1 = document.querySelectorAll(".switchOn");

Switch1[0].addEventListener("click", function () {
    Button1[0].classList.toggle("switch-button-position");
    // Button1[1].classList.toggle("switch-button-position");
    // Button1[2].classList.toggle("switch-button-position");
})
Switch1[1].addEventListener("click", function () {
    Button1[1].classList.toggle("switch-button-position");
})
Switch1[2].addEventListener("click", function () {
    Button1[2].classList.toggle("switch-button-position");
})



// ----------------------------------------------Slider-----------------
const Back = document.querySelector(".left");
const Next = document.querySelector(".right");

Next.addEventListener("click", function () {
    let screenWidth = document.documentElement.clientWidth;
    let firstImage = document.querySelector(".size2");
    firstImage.style.marginLeft = `${screenWidth}px`;
    setTimeout(function () {
        let firstImageSource = firstImage.getAttribute("src");
        firstImage.remove();
        // let lastImage = document.createElement("img");
        lastImage.setAttribute("src".firstImageSource);
        Back.before(lastImage);
    }, 500)
});
Back.addEventListener("click", function () {
    let screenwidth = document.documentElement.clientWidth;
    let lastImage = document.querySelectorAll(".size2")[document.querySelectorAll(".size2").lenght - 1];
    let lastImageSource = lastImage.getAttribute("src");
    lastImage.remove();
    // let firstImage = document.createElement("img");
    firstImage.setAttribute("src".lastImageSource);
    firstImage.style.marginLeft = `${-screenwidth}px`;
    document.querySelector("slider-container").prepend(firstImage);
    setTimeout(function () {
        firstImage.style.marginLeft = 0;
    }, 100);
});

// footer 88888888888888888888888888888888888888888888  minifooter
const DIVS = [document.getElementById("community"), document.getElementById("support"), document.getElementById("resource"), document.getElementById("companyInfo"), document.getElementById("more")];

const PLUSES = [document.getElementById("fst"), document.getElementById("fst2"), document.getElementById("fst3"), document.getElementById("fst4"), document.getElementById("fst5")];

const BRDS = [document.getElementById("title1"), document.getElementById("title2"), document.getElementById("title3"), document.getElementById("title4"), document.getElementById("title5")];

const BTN = document.querySelectorAll("button");
const DIV = document.getElementById("community");
const PLUS = document.getElementById("p1");
const BRD = document.getElementById("title1");


const DIV2 = document.getElementById("support");
const PLUS2 = document.getElementById("p2");
const BRD2 = document.getElementById("title2");


const DIV3 = document.getElementById("resource3");
const PLUS3 = document.getElementById("p3");
const BRD3 = document.getElementById("title3");


const DIV4 = document.getElementById("companyInfo");
const PLUS4 = document.getElementById("p4");
const BRD4 = document.getElementById("title4");


const DIV5 = document.getElementById("more");
const PLUS5 = document.getElementById("p5");
const BRD5 = document.getElementById("title5");

const HEIGHT = document.getElementById("adjustft");


function closeAll(x) {
    for (let i = 0; i < 5; i++) {
        if (i == x) {
            continue;
        }
        DIVS[i].classList.remove("open-footer");
        PLUSES[i].classList.remove("rotate");
        BRDS[i].classList.remove("hideborder");
    }

}

BTN[0].addEventListener("click", function () {

    closeAll(0);

    PLUS.classList.toggle("rotate");
    DIV.classList.toggle("open-footer");
    BRD.classList.toggle("hideborder");
});

BTN[1].addEventListener("click", function () {


    closeAll(1);

    PLUS2.classList.toggle("rotate");
    DIV2.classList.toggle("open-footer");
    BRD2.classList.toggle("hideborder");

});

BTN[2].addEventListener("click", function () {

    closeAll(2);


    PLUS3.classList.toggle("rotate");
    DIV3.classList.toggle("open-footer");
    BRD3.classList.toggle("hideborder");


});


BTN[3].addEventListener("click", function () {


    closeAll(3);


    PLUS4.classList.toggle("rotate");
    DIV4.classList.toggle("open-footer");
    BRD4.classList.toggle("hideborder");


});
BTN[4].addEventListener("click", function () {


    closeAll(4);


    PLUS4.classList.toggle("rotate");
    DIV4.classList.toggle("open-footer");
    BRD4.classList.toggle("hideborder");


});
BTN[5].addEventListener("click", function () {


    closeAll(5);


    PLUS4.classList.toggle("rotate");
    DIV4.classList.toggle("open-footer");
    BRD4.classList.toggle("hideborder");


});




// 