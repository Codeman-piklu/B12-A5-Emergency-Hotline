// !Functionalities of  heart icon 
const heartCounts=document.getElementById("total_Hearts")
const hearts=document.getElementsByClassName("fa-heart")
let count=0;
for(const heart of hearts){
      heart.addEventListener("click",(e) =>{
        count++;
        heartCounts.textContent = count;
      });
}