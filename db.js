const mongoose=require('mongoose');
require('dotenv').config()
// define the mongodb connection URL
//const mongoURL='mongodb://127.0.0.1:27017/hotels';
//const mongoURL='mongodb+srv://veshnavisharmacs21:hello12345@cluster0.wi7a1le.mongodb.net/';
const mongoURL=process.env.DB_URL;
// set up mongodb connection 
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Database is connected');
})
db.on('error',()=>{
    console.log('error occured');
})
db.on('disconnected',()=>{
    console.log('Database is disconnected');
})