/////////////////////
//*  VARIABLES   *//
///////////////////

// URL parameters
let apiDataStr = new URL(window.location.href).searchParams.get("data");


// DOM tag selectors
let domDataList = document.querySelectorAll(".datum-auto-apply");
const countryFlagImg = document.querySelector(".datum-country-flag-img");

// Parsed values from URL parameters
var dataSet;



/////////////////////
//*  FUNCTIONS   *//
///////////////////


// Parse value of a data item from the url string parameters
let getValue = (valueName) => {
    let regex = new RegExp(`"${valueName}":\\[?"?((.?\\w+\\s*)+)*"?\\]?`, "i")
    var value = apiDataStr.match(regex)

    return value
}

let parseFlagUrl = () =>{
    return (apiDataStr.match(/"svg":"([^"]*)/))[1]
}

// Apply parsed items to the list in the html file
let applyData = (locationArray, dataArry) => {
    for (var i = 0; i < 8; i++) {
        locationArray[i].textContent += ` ${dataArry[i]}`
    }
}



/////////////////////////
//*  IMPLEMENTATION  *//
///////////////////////


dataSet = [getValue("name")[1], getValue("nativeName")[1], getValue("population")[1], getValue("region")[1], getValue("subregion")[1], getValue("capital")[1], getValue("topleveldomain")[1], getValue("currencies"), getValue("languages")]
applyData(domDataList, dataSet)
// console.log(parseFlagUrl())
countryFlagImg.setAttribute("src", parseFlagUrl())
countryFlagImg.setAttribute("alt", "flag of "+ getValue("name")[1])