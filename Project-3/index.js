const btnE1=document.querySelector(".btn");
const inputE1=document.getElementById("input");
const copyiconE1=document.querySelector(".fa-copy");
const alertcontainerE1=document.querySelector(".alert-container");

btnE1.addEventListener("click",()=>{
    createPassword();
});

copyiconE1.addEventListener("click",()=>{
    copyPassword();
    alertcontainerE1.classList.remove("active");
    setTimeout(()=>{
        alertcontainerE1.classList.add("active");
    },2000)
})
function createPassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passLength=14;
    let password="";
    for(let i=0;i<passLength;i++){
        // Returns a random integer from 0 to chars length:
        const rand=Math.floor(Math.random()*chars.length);
        password+=chars.substring(rand,rand+1);
    } 
    inputE1.value=password;
    alertcontainerE1.innerText= password + " copied!";
}


function copyPassword(){
    inputE1.select();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputE1.value);
    
}