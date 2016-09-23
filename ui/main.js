console.log('Loaded!');
var blo=document.getElementById("main-blo");
blo.innerHTML="Nice One";
alert('Hi,I am javascript');

var imag=document.getElementById("imge");
var marginleft=0;
function moveRight(){
   marginleft+=4;
   imag.style.marginLeft=marginleft+"px"; 
}

imag.onclick=function(){
    var interval=setInterval(moveRight,50);
   
};