const menuBar = document.getElementById('menu-bar');
const dropDown = document.getElementById('drop-down');

let isShown = false;
menuBar.addEventListener("click", function(){ 
   isShown = !isShown
   if(isShown === true){
     dropDown.style.transform = "translateX(0%)" 
     menuBar.childNodes[1].style.color = 'white'
     menuBar.childNodes[1].className = "fa-regular fa-x"
     menuBar.childNodes[1].style.fontSize = '15px'
   }
   else{
     dropDown.style.transform = "translateX(100%)"
     menuBar.childNodes[1].style.color = '#6070ff'
     menuBar.childNodes[1].className = "fa-solid fa-bars"
     menuBar.childNodes[1].style.fontSize = '30px'
   }
  
});