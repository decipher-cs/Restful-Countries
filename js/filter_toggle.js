const toggleBtn = document.querySelector("#toggle-btn");
const filterMenu = document.querySelector(".filter-section__dropdown--cascade")

toggleBtn.addEventListener("click", (btn)=>{
    if (filterMenu.classList.contains("hide-cascade")){
        filterMenu.classList.remove("hide-cascade")
    } else{
        filterMenu.classList.add("hide-cascade")
    }
})