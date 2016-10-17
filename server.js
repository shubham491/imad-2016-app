var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var da={
'article-three':{
    title:"My First Product",
    heading:"Vaseline",
    date:"18th Sept. 2016",
    body:`Dual layer design fuses a premium quality polycarbonate outer layer with an enhanced Thermoplastic Polyurethane (TPU) rubberized gel skin to offer slim, lightweight and form-fitted protection for the OnePlus 3
Snap on design allows for easy installation and multiple colors are available to match your personal style.
Features raised edges to protect the display screen from scratches when the device is placed face down and a lip that allows compatibility with most screen protectors
Utilizing two layers, this cover incorporates the top safety advantages of both a hard and soft case. The soft inner TPU absorbs and disperses the shock of most drops encountered in daily use. On the exterior, the durable polycarbonate shield protects against scratches and still maintains the smooth and sleek feel of your device
Imported from USA`
    
    
},
'article-two':{
    title:"My Secondt Product",
    heading:"One Plus3",
    date:"18th Sept. 2016",
    body:`16MP primary camera (f/2.0 Aperture, 1.12 �m Pixels) with high speed autofocus technology (PDAF), Electronic (EIS) and Optical (OIS) stabilization technologies and 8MP front facing camera,Corning's Gorilla Glass 4
13.97 centimeters (5.5-inch) Optic AMOLED capacitive touchscreen with full HD (401 ppi) 1920 x 1080 pixels resolution; ceramic-coated fingerprint Scanner (<0.2 seconds)
OxygenOS based on Android Marshmallow 6.0.1 operating system with 2.2GHz + 1.6GHz Kryo Qualcomm Snapdragon 820 quad core processor, 14nm FinFET technology, Adreno 530 GPU, 6GB LPDDR4 RAM, 64GB internal memory (UFS 2.0 Flash Storage) and dual nano-SIM dual-standby (4G+4G) with NFC enabled and reversible type-C connector
3,000 mAh lithium-polymer battery (non-removable) powered by state-of-the-art Dash Charge technology (replenish over 60% of the battery within 30 minutes)
1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`
    
    
}
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
app.get('/profile1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index1.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
 counter=counter+1;
  res.send(counter.toString());
});var names=[];
var comments=[];
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/styl.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styl.css'));
});

app.get('/ui/jquery.bxslider.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.bxslider.css'));
});
app.get('/ui/nav.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nav.css'));
});
app.get('/ui/jquery-1.11.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-1.11.2.min.js'));
});
app.get('/ui/jquery.bxslider.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.bxslider.min.js'));
});
app.get('/ui/main4.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main4.js'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/main2.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main2.js'));
});

app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/profile',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/comm1_submit/',function(req,res){
   var name=req.query.name;
   comments.push(name);
   //JSON:JavaScript Object Notation
   
   res.send(JSON.stringify(comments));
});
app.get('/name_submit/',function(req,res){
   var name=req.query.name;
   names.push(name);
   //JSON:JavaScript Object Notation
   
   res.send(JSON.stringify(names));
});


  // res.send(JSON.stringify(names));
app.get('/:daname',function(req,res){
    var daname=req.params.daname;
   res.send(createTemp(da[daname]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/img060.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img060.jpg'));
});

app.get('/ui/wood-1099960_1920.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'wood-1099960_1920.jpg'));
});

/**/
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
