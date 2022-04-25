//////////////////////
//* Const and Vars*//
////////////////////

const themeBtn = document.querySelector(".heading__theme-switch-btn");
const themeImg = document.querySelector(".heading__theme-switch-btn img");
const themeText = document.querySelector(".heading__theme-switch-btn span");
const html = document.querySelector(":root");

themeBtn.addEventListener("click", (btn) => {
    console.log(themeText.textContent)

    //Switch to LIGHT mode
    if (themeText.textContent == "Dark Mode") {
        themeText.textContent = "Light Mode"
        themeImg.setAttribute("src", "https://img.icons8.com/ios-glyphs/24/000000/sun--v1.png")
        html.style.colorScheme = "light"

        //Switch to DARK mode
    } else if (themeText.textContent == "Light Mode") {
        themeText.textContent = "Dark Mode"
        themeImg.setAttribute("src", "https://img.icons8.com/external-flatart-icons-solid-flatarticons/24/000000/external-crescent-moon-islam-and-ramadan-flatart-icons-solid-flatarticons-1.png")
        html.style.colorScheme = "dark"
    }
})