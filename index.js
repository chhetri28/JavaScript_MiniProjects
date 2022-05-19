const textarea1=document.getElementById("textarea");

const totalCouter1=document.getElementById("total-counter");

const remainingCounter1=document.getElementById("remaining-counter");
textarea1.addEventListener("keyup",()=>{
    updateCounter();
});

function updateCounter() {
    totalCouter1.innerText=textarea1.value.length;
    remainingCounter1.innerText=textarea1.getAttribute("maxLength")-textarea1.value.length;
}