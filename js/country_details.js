let url = new URL(window.location.href).searchParams.get("data")

console.log(url)

const lis = document.querySelectorAll("li");

// lis.forEach((li)=>{
//     li.innerText= "aa"
// })
let myarr = [1,2,3,4,5,6,7,8]
for (var i=0; i<9; i++){
    lis[i].innerText += myarr[i]
}

console.log(lis)