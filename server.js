var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var data={
    title:"My First Product",
    heading:"Vaseline",
    date:"18th Sept. 2016",
    body:`Dual layer design fuses a premium quality polycarbonate outer layer with an enhanced Thermoplastic Polyurethane (TPU) rubberized gel skin to offer slim, lightweight and form-fitted protection for the OnePlus 3
Snap on design allows for easy installation and multiple colors are available to match your personal style.
Features raised edges to protect the display screen from scratches when the device is placed face down and a lip that allows compatibility with most screen protectors
Utilizing two layers, this cover incorporates the top safety advantages of both a hard and soft case. The soft inner TPU absorbs and disperses the shock of most drops encountered in daily use. On the exterior, the durable polycarbonate shield protects against scratches and still maintains the smooth and sleek feel of your device
Imported from USA`
    
    
};
var createTemp=function(dat){
    var title=dat.title;
    var heading=dat.heading;
    var date=dat.date;
    var body=dat.body;
    var htm=`<html>
  <html>
<title>
  ${title}
</title>
<link href="ui/style.css" rel="stylesheet"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>

<body>
    <div class="count">
  <h1>
    ${heading}(${date})
  </h1>
  <p>
    ${body}
  </p>
  </div>
</body>

</html>`;
return htm;
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-three',function(req,res){
   res.send(createTemp(data));
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
