var p = document.getElementById('dp')
var m = document.getElementById('dm')
var d = document.getElementById('d1')
var rs = document.getElementById('d2')



var plus = 0;
function add(){
   plus=plus+1
d.innerHTML= plus
if(plus>0){
   d.style.color="aqua"
}
}
function dell(){
    plus =plus-1
   d.innerHTML=plus
   if(plus<0){
      d.style.color="red"
   }
   
   }
   function zero (){
      plus = 0
   d.innerHTML= plus
   
   }
var b1 = document
  
   
   p.addEventListener('click',add)
   m.addEventListener('click',dell)
   rs.addEventListener('click',zero)
   