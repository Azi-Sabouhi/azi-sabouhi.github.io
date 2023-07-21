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




// 