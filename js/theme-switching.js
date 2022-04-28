//////////////////////
//* Const and Vars*//
////////////////////

const root = document.querySelector(":root");

const themeBtn = document.querySelector(".heading__theme-switch-btn");
const themeImg = document.querySelector(".heading__theme-switch-btn img");
const themeText = document.querySelector(".heading__theme-switch-btn span");

const storage = window.localStorage


let applyTheme = (theme) => {
        //Switch to DARK mode//
    if (theme == "light") {
        themeText.textContent = "Dark Mode"
        themeImg.setAttribute("src", "https://img.icons8.com/fluency-systems-regular/24/000000/crescent-moon.png")
        root.setAttribute("color-scheme", "light")
        storage.setItem("theme", "light")
        
        //Switch to LIGHT mode//
    } else if (theme == "dark") {
        themeText.textContent = "Light Mode"
        themeImg.setAttribute("src", "https://img.icons8.com/ios-glyphs/24/ffffff/sun--v1.png")
        root.setAttribute("color-scheme", "dark")
        storage.setItem("theme", "dark")
    }
}

applyTheme(storage.getItem("theme"))

themeBtn.addEventListener("click", (btn) => {
    root.getAttribute("color-scheme") == "light" ? applyTheme("dark") : applyTheme("light");
})