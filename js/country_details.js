/////////////////////
//*  VARIABLES   *//
///////////////////

// URL parameters
let apiDataStr = new URL(window.location.href).searchParams.get("data");


// DOM tag selectors
let domDataList = document.querySelectorAll(".datum-auto-apply");
const countryFlagImg = document.querySelector(".datum-country-flag-img");
const languageList = document.querySelector(".datum-languages")
const borderCountriesContainer = document.querySelector(".datum-border-countries")


// Parsed values from URL parameters
var dataSet;



/////////////////////
//*  FUNCTIONS   *//
///////////////////


// Parse value of a data item from the url string parameters
let getValue = (valueName) => {
    let regex = new RegExp(`"${valueName}":\\[?"?((\.?\\w+\\s*)+)*"?\\]?`, "i")
    var value = apiDataStr.match(regex)

    return value
}

// Get the hosting URL of the flag by parsing the url params
let parseFlagUrl = () =>{
    return (apiDataStr.match(/"svg":"([^"]*)/))[1]
}

// Parse data string to get a list of all the used currencies
let parseCurrency = ()=>{
    let regex = new RegExp(`"currencies":\\[([^\\]]+)`)
    let otherRegex = new RegExp(`"name":\\[?"?((.?\\w+\\s*)+)*"?\\]?`, "i")
    var value = apiDataStr.match(regex)[1].match(otherRegex)[1]
    return value
}

// Parse string to find all languages spoken in a country and then put them inside the DOM
let parseAndPutLang = ()=>{
    let regex = new RegExp(`"languages":\\[([^\\]]+)`)
    let otherRegex = new RegExp(`"name":\\[?"?((.?\\w+\\s*)+)*"?\\]?`, "i")
    var value = apiDataStr.match(regex)[1].split("},")
    // value[0] = value[0].replace(otherRegex, "")
    value.forEach((item, index)=>{
        value[index] = item.match(otherRegex)[1]
        languageList.innerHTML+= ` ${value[index]}`
    })
}

// Add a button to the DOM for every bordering country the selected nation has
let borderCountriesBtn = ()=>{
    let regex = new RegExp(`"borders":\\[([^\\]]+)`)
    var borderArr = apiDataStr.match(regex)[1].replaceAll('"',"").split(",")
    for (var i=0; i<borderArr.length ; i++){
        borderCountriesContainer.innerHTML+=`<button>${borderArr[i]}</button>`
    }
}

// Apply parsed items to the list in the html file
let applyData = (locationArray, dataArray) => {
    for (var i = 0; i < 8; i++) {
        locationArray[i].textContent += ` ${dataArray[i]}`
    }
}



/////////////////////////
//*  IMPLEMENTATION  *//
///////////////////////


dataSet = [getValue("name")[1], getValue("nativeName")[1], getValue("population")[1], getValue("region")[1], getValue("subregion")[1], getValue("capital")[1], getValue("topleveldomain")[1], parseCurrency()]
applyData(domDataList, dataSet)
countryFlagImg.setAttribute("src", parseFlagUrl())
countryFlagImg.setAttribute("alt", "flag of "+ getValue("name")[1])
borderCountriesBtn()
parseAndPutLang()
console.log(getValue("nativeName"))