const tabs=document.querySelectorAll(".tab")
const panels=document.querySelectorAll(".panel")

tabs.forEach(function(tab){
    tab.addEventListener("click",()=>{
  tabs.forEach(function(t){
    t.classList.remove("active")
    })
    panels.forEach(function(p){
    p.classList.remove("active")
    })
    tab.classList.add("active")
    document.getElementById(tab.dataset.tab).classList.add("active")
    })
})