var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var port = 4000;

app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name:"Salmon Creek", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f0c679a6eeb0b8_340.jpg"},
    {name:"Spruces", image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144495f7c178a4e8b5_340.jpg"},
    {name:"Donut Falls", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},    
];


app.listen(port, ()=>{console.log("Yelp Camp is running on port: ", port)})
app.get('/', (req, res)=>{
    res.render("landing");
});

app.get('/campgrounds', (req, res)=>{
   
    res.render("campgrounds", {campgrounds: campgrounds})
}); 


app.get('/campgrounds/new', (req, res)=>{
    res.render("new")
}); 
app.post('/campgrounds', (req, res)=>{
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image})
    res.redirect("campgrounds")
})

