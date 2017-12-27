var express=require('express');
var router=express.Router();
var user=require('../models/user');

router.post('/register',(req,res)=>{
    var newUser={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword,
    };
    if(req.body.password==req.body.cpassword){
        user.findOne({username:req.body.username},(err,result)=>{
            if(result==undefined){
                var newuser=new user(newUser);
                newuser.save((err,result)=>{
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json('Registration Succesfull');
                    }
                });
            }
            else{
                res.json('Username already taken');
            }
        });
    }
    else{
        res.json('password doesnt match');
    }
});

router.post('/login',(req,res)=>{
    if(req.body.username&&req.body.password){
        user.findOne({username:req.body.username},(err,user)=>{
            if(user==null){
                res.json('User doesnt exist');
            }
            else{
                if(user.password!=req.body.password){
                    res.json('Password doesnt match');
                }
                else{
                    res.json({
                        tokken:user._id,
                        user:user.username
                    });
                }
            }
        });
    }
    else{
        res.json('Please provide username and password');
    }
});

router.get('/user/:id',(req,res)=>{
   var id=req.params.id;
   user.findById(id,(err,user)=>{
       if(err){
           res.json(err);
       }
       else{
           res.json({
               username:user.username,
               email:user.email,
               id:user._id
           });
       }
   }); 
});

module.exports=router;