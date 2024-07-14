"use strict";

let boton1=document.getElementById("boton1");
let boton2=document.getElementById("boton2");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");

boton1.addEventListener("click",function(){
    div1.style.visibility="hidden"
    div2.style.visibility="visible"
}) 

boton2.addEventListener("click",function(){
    div1.style.visibility="visible"
    div2.style.visibility="hidden"
})
