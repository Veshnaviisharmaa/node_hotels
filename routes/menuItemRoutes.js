const express=require('express');
const router=express.Router();
const MenuItem=require('../models/Menu')


 //post method for Menu
 router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    //create a new menu document using mongoose model
    const newMenu=new MenuItem(data);
    //save the data into database
    const response=await newMenu.save();
    console.log('Data saved successfully');
    res.status(200).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


//get method to get the menu
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('Menu items fetched');
        res.status(200).json(data);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

    

//creating parameterized API call for menu
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;// Extract the taste type from URL
        if(taste=='spicy'||taste=='sweet'||taste=='sour')
            {
                const response=await MenuItem.find({taste:taste});
                console.log('response fetched');
                res.status(200).json(response);
            }
            else
            {
                res.status(404).json({error:'Invalid taste type'});
            }
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

//update method for Menu
router.put('/:id',async(req,res)=>{
    try{
    const menuId=req.params.id;
    const updatedmenudata=req.body;
    const response=await MenuItem.findOneAndUpdate(menuId,updatedmenudata,{
        new:true,
        runValidators:true,
    })
    if(!response)
        {
            res.status(404).json({error:'Menu item not found'});
        }
        console.log('data in menu updated');
        res.status(200).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

})

//comment added for testing purposes
module.exports=router;