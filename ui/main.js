console.log('Loaded!');
alert('Hi,I am javascript');
var blo=document.getElementById("main-blo");
blo.innerHTML="Nice One";
var imag=document.getElementById("imge");
var marginleft=0;
function moveRight(){
   marginleft+=10;
   imag.style.marginLeft=marginleft+"px"; 
}

imag.onclick=function(){
    var interval=setInterval(moveRight,100);
   
};