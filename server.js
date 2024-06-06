// function add(a,b)
// {
//     return a+b
// }
// var add=function(a,b)
// {
//     return a+b;
// }
// var add=(a,b)=>{
//     return a+b;
// }
// var add=(a,b)=>a+b;
// var result=add(495,5);
// console.log(result);
// (function(){
//     console.log("Hello world");
// })();
// function callback(){
//     console.log("This is a callback function");
// }
// var add=function(a,b,callback)
// {
//     var result=a+b;
//     console.log(result);
//     callback();
// }
// add(3,4,function(){
//     console.log("Hello world")
// });
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
// //creating a file using fs module
// fs.appendFile('greeting.txt',"Hey"+user.username+'\n',()=>console.log("File is created"));
// var notes=require('./notes.js');
// var _=require('loadash')
// console.log("This is server page")
// console.log(notes.age);
// console.log(notes.addNumber(notes.age,4));

//loadash
// var _ = require('lodash');
// var data=['person',1,2,1,2,'person','3','4','3'];
// var filter=_.uniq(data);
// console.log(filter);
// const jsonString=`{
//     "name":"Rachel",
//     "age":30,
//     "city":"New York"
// }`
// //converting json string to json object
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);
// console.log(jsonObject.name);
require('dotenv').config();
const express = require("express");
const app = express();
const db=require('./db');
const Person=require('./models/Person');
const MenuItem=require('./models/Menu')
const bodyParser=require('body-parser');
app.use(bodyParser.json());// it will store in req.body
const PORT = process.env.PORT || 5000;
console.log('PORT:', process.env.PORT);

app.get("/", (req, res) => 
    {	
        res.send("Hello world");
    });

    

    

   
// import the router files
const personRoutes=require('./routes/personRoutes');
const menuItemroutes=require('./routes/menuItemRoutes');
// use the routers
  app.use('/person',personRoutes);
  app.use('/menu',menuItemroutes);

app.get("/pasta",(req,res)=>{
    var pasta={
        name:"pasta",
        sauce:"red",
        is_Spicy:true
        
    }
    res.send(pasta);
})
app.post('/items',(req,res)=>{
    res.send('data is saved');
})

app.listen(PORT, () => console.log("Server running on port " + PORT));