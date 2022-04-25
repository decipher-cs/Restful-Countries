import Fuse from 'fuse.js'



//////////////////////
//* Const and Vars*//
////////////////////
console.log("hello")
const countryList = document.querySelector(".country-list");
var apiData = null;


////////////////////
//*  Functions  *//
//////////////////

// Get country data from API
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


////////////////////////////
//*   Event Listeners   *//
//////////////////////////

window.onload = () => {

    fetch("https://restcountries.com/v2/all").then((data) => {
        return data.json()
    }).then((data) => {
        apiData = data
    }).then(() => {
        for (let i = 1; i <= 5; i++) {
            countryList.appendChild(makeNode(apiData[getRandom(apiData.length)]))
        }
    })

}