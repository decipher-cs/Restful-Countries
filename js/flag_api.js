//////////////////////
//* Const and Vars*//
////////////////////

const apiUrl = "https://restcountries.com/v2/all?fields=name,population,region,capital,flag";

const countryList = document.querySelector(".country-list");
var countryListjson = null;

// search box
const searchBox = document.querySelector(".filter-section__search-box--input");

// filter dropdown
const filter = document.querySelector(".filter-section__dropdown");

/////////////////////
//*  API calls   *//
///////////////////

fetch(apiUrl).then((data) => {
    return data.json()
}).then((data) => {
    countryListjson = data
}).then(() => {
    for (let i = 1; i <= 10; i++) {
        countryList.appendChild(makeNode(countryListjson[getRandom(countryListjson.length)]))
    }
})


////////////////////
//*  Functions  *//
//////////////////

// Create node and attach it to the country list
makeNode = (data) => {
    let node = document.createElement("article");
    let flag = document.createElement("img");
    let heading = document.createElement("h4")
    let population = document.createElement("p");
    let region = document.createElement("p");
    let capital = document.createElement("p");

    node.classList.add("country-list__country-card")

    flag.setAttribute("src", `${data.flag}`)
    // flag.setAttribute("loading", `lazy`)
    heading.textContent = `Country Name: ${data.name}`
    population.textContent = `population: ${data.population}`
    region.textContent = `region: ${data.region}`
    capital.textContent = `capital: ${data.capital}`

    node.appendChild(flag)
    node.appendChild(heading)
    node.appendChild(population)
    node.appendChild(region)
    node.appendChild(capital)

    return node
}

let getRandom = (max) => {
    return Math.floor(Math.random() * max)
}

// Clear country list

let clearCountryList = () => {
    let cardList = document.querySelectorAll(".country-list__country-card")
    cardList.forEach((item)=>{
        item.remove()
    })
}


////////////////////////////
//*   Event Listeners   *//
//////////////////////////

// Filter country list by user-query
searchBox.addEventListener("input", (input) => {
    var query = input.target.value
    let filteredList = []
    let regex = new RegExp(query, 'i')
    
    countryListjson.forEach((item) => {
        if ( regex.test(item.name) || regex.test(item.capital) ){
            filteredList.push(item)
        } 
    });
    clearCountryList()
    for (var i in filteredList){
        countryList.appendChild(makeNode(filteredList[i]))
    }

})

// Filter country list by continent
filter.addEventListener("change", (e) => {
    let filteredList = countryListjson.filter((item) => {
        if (item.region == e.target.value) {
            return true
        }
    });
    clearCountryList()
    for (var i in filteredList){
        countryList.appendChild(makeNode(filteredList[i]))
    }
})