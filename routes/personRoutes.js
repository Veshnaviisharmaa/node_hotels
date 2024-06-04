const express=require('express');
const router=express.Router();
const Person=require('../models/Person')

//POST route to add a person
router.post('/',async(req,res)=>
    {
       try{
        const data=req.body// assuming that req.body contains person data
        // create a new Person document using the Mongoose model
        const newPerson=new Person(data);
        //save the new person into the database
        const response=await newPerson.save();
        console.log("Data is saved");
        res.status(200).json(response);
       }catch(err){
        console.log('error occured',err);
        res.status(500).json({error:'Internal server error'});
       }
    })


    //GET method to get the person
    router.get('/',async(req,res)=>{
        try{
        const data=await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:'Internal Server error'});
        }
    })


    router.get('/:workType', async(req,res)=>{
        try{
            const workType=req.params.workType;// Extracting the work type from URL parameter
            if(workType=='chef'||workType=='manager'||workType=='waiter')
                {    const response=await Person.find({work:workType});
                    console.log('response fetched');
                    res.status(200).json(response);
                }
                else
                {
                    res.status(404).json('Invalid work type');
                }
        }catch(err)
        {
            console.log(err);
            res.status(500).json({error:'Internal server error'});
        }
       })
       router.put('/:id',async(req,res)=>{
        try{
            const personId=req.params.id;
            const updateddata=req.body;

            const response=await Person.findByIdAndUpdate(personId,updateddata,{
                new:true,
                runValidators:true
            });
            if(!response)
                {
                    res.status(404).json({error:'Person not found'});
                }
                console.log('data updated');
                res.status(200).json(response);
        }catch(err)
        {
            console.log(err);
            res.status(500).json({error:'Internal server error'});
        }
       })

       router.delete('/:id',async(req,res)=>{
        try{
            const personId=req.params.id;
            const response=await Person.findOneAndDelete(personId);
            if(!response)
                {
                    res.status(404).json({error:'Person not found'});
                }
                console.log('Person deleted');
                res.status(200).json({message:'Person deleted successfully'});
        }catch(err)
        {
            console.log(err);
            res.status(500).json({error:'Internal server error'});
        }
       })


       module.exports=router;