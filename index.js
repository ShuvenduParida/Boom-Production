let target = document.getElementById("navbar-collapse");
const ToggleClass = ()=>{
   
   if(target.classList.contains("hidden")){
    target.classList.remove("hidden");
   }
   else{
    target.classList.add("hidden");
   }
}