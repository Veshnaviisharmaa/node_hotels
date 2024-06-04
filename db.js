const mongoose=require('mongoose');
// define the mongodb connection URL
const mongoURL='mongodb://127.0.0.1:27017/hotels';
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