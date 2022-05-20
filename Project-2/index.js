const inputE1=document.querySelector(".input");
inputE1.checked=JSON.parse(localStorage.getItem("mode"));

const bodyE1=document.querySelector("body")
function updateBody(){
        if(inputE1.checked){
            bodyE1.style.backgroundColor = "black"
        }else{
            bodyE1.style.backgroundColor = "white"
        }
}   



inputE1.addEventListener("input",()=>{
    updateBody();
    updateLocalStorage
})

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputE1.checked));
}