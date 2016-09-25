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
//var counter=0;
button.onclick=function(){
  //create a request
  var request=new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            var counter=request.responseText;
            var span=document.getElementById('coun');
            span.innerHTML=counter.toString();
           
        }
    }
  
  //render the variable in the correct span
  counter+=1;
  var span=document.getElementById("coun");
  span.innerHTML=counter.toString();
  //make a request
  request.open('GET','http://shubham491.imad.hasura-app.io/counter');
  request.send('null');
  
};
//capture name and submit
var name1=document.getElementById("name");
var name=name1.value;
var subm=document.getElementById("submit_btn");
subm.onclick=function(){
  //make a request to the server and send the name
  //capture a list of names and render it as a list
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++)
  {
      list+="<li>"+names[i]+"</li>";
      
  }
  var ul=document.getElementById("name_list");
  ul.innerHTML=list;
};








