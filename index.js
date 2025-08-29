// *Functionalities of  heart icon 
const heartCounts=document.getElementById("total_Hearts")
const hearts=document.getElementsByClassName("fa-heart")
let count=0;
for(const heart of hearts){
      heart.addEventListener("click",() =>{
        
        count++;
        heartCounts.textContent = count;
      });
}

//  *function of Call Buttons
let coins=100;
const totalCoins=document.getElementById("total_Coins")
const callButtons=document.getElementsByClassName("call_btn")



for(const button of callButtons){
    button.addEventListener("click",()=>{

const serviceName = button.dataset.service;
const serviceNumber= button.dataset.number;

if(coins>=20){
    coins=coins-20;
    totalCoins.textContent=coins;
    alert(`calling ${serviceName} at ${serviceNumber}`)

//* callhisoty 
const callhistorry= document.getElementById("call_history_div");
const currentTime=new Date().toLocaleTimeString();
const div=document.createElement("div")
div.innerHTML=`
<div class=" mt-3 mb-3.5 p-5 rounded-2xl max-w-lg mx-auto form bg-[#FAFAFA]" id="">
<div class="flex justify-between items-center gap-3 ">
  <div class="leftdiv">
    <h1 class="text-xl font-bold">${serviceName}</h1>
    <p>${serviceNumber} </p>
  </div>
  <div class="rightdiv">
    <p> ${currentTime} </p>
  </div>
</div>
</div>
`
callhistorry.appendChild(div)
}
else{
    alert("Not enough coins")
    return;
}


    })
}
//* clear button
const clearButton=document.getElementById("clear_button")
.addEventListener("click",()=>{
 document.getElementById("call_history_div").innerText=""
})
//* copy button 
let copyCount=0;
const copyButtons=document.getElementsByClassName("copy_btn");
const copyCounts=document.getElementById("copy_count")

for(const copybutton of copyButtons){
  copybutton.addEventListener("click",()=>{

const serviceNumbers=copybutton.dataset.number;

 navigator.clipboard.writeText(serviceNumbers).then(()=>{
      alert(`Number ${serviceNumbers} copied!`);
      copyCount++;
      copyCounts.textContent=copyCount;
  })
 });
}

