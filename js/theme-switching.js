//////////////////////
//* Const and Vars*//
////////////////////

const root = document.querySelector(":root");

const themeBtn = document.querySelector(".heading__theme-switch-btn");
const themeImg = document.querySelector(".heading__theme-switch-btn img");
const themeText = document.querySelector(".heading__theme-switch-btn span");
const menuArrowIcon = document.querySelector(".filter-section__dropdown--toggle-img");
const backBtn = document.querySelector(".main-content__redirection img");

const storage = window.localStorage


let applyTheme = (theme) => {
    //Switch to DARK mode//
    if (theme == "light") {
        themeText.textContent = "Dark Mode"
        themeImg.setAttribute("src", "https://img.icons8.com/fluency-systems-regular/24/000000/crescent-moon.png")
        root.setAttribute("color-scheme", "light")
        storage.setItem("theme", "light")
        if (menuArrowIcon) {
            menuArrowIcon.setAttribute("src", "https://img.icons8.com/material-rounded/24/535151/circled-up.png")
        }
        else if (backBtn) {
            backBtn.setAttribute("src", "https://img.icons8.com/fluency-systems-regular/24/000000/reply-arrow.png")
        }
        //Switch to LIGHT mode//
    } else if (theme == "dark") {
        themeText.textContent = "Light Mode"
        themeImg.setAttribute("src", "https://img.icons8.com/ios-glyphs/24/ffffff/sun--v1.png")
        root.setAttribute("color-scheme", "dark")
        storage.setItem("theme", "dark")
        if (menuArrowIcon) {
            menuArrowIcon.setAttribute("src", "https://img.icons8.com/material-rounded/24/ffffff/circled-up.png")
        } else if (backBtn) {
            backBtn.setAttribute("src", "https://img.icons8.com/fluency-systems-regular/24/ffffff/reply-arrow.png")

        }
    }
}

applyTheme(storage.getItem("theme"))

themeBtn.addEventListener("click", (btn) => {
    root.getAttribute("color-scheme") == "light" ? applyTheme("dark") : applyTheme("light");
})