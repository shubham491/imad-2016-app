console.log('Loaded!');
var blo=document.getElementById("main-blo");
blo.innerHTML="Nice One";
alert('Hi,I am javascript');

var imag=document.getElementById("imge");
var marginleft=0;
function moveRight(){
   marginleft+=1;
   imag.style.marginLeft=marginleft+"px"; 
}

imag.onclick=function(){
    var interval=setInterval(moveRight,50);
   
};
//counter code
var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
  //make a rquest to the counter endpoint
  
  //capture the response and store it in a variable
  
  //render the variable in the correct span
  counter+=1;
  var span=document.getElementById("coun");
  span.innerHTML=counter.toString();
  
};