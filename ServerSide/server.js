var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var port=3000;
var routes=require('./routes/routes');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/',routes);

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("App is running at "+port);
    }
});