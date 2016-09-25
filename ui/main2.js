
var comments=[];
var subm=document.getElementById("submit_btn1");
subm.onclick=function(){
  //make a request to the server and send the name
  //capture a list of names and render it as a list
  //create a request
  var request=new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
  var comments=request.responseText;
  comments=JSON.parse(comments);
  var list='';
  for(var i=0;i<comments.length;i++)
  {
      list+="<li>"+comments[i]+"</li>";
      
  }
  var ul=document.getElementById("comm_list");
  ul.innerHTML=list;
        }
    }
};
var name1=document.getElementById("comm1");
var name=name1.value;
request.open('GET','http://shubham491.imad.hasura-app.io/comm1_submit?name='+name);
  request.send('null');
};