const router = require("express").Router();
const Type = require("../models/Type");

// Create a new category
router.post("/", async (req, res) => {
    const NewType = new Type(req.body);
    try{
        const savedType = await NewType.save();
        res.status(200).json(savedType)


    } catch (err){
        res.status(500).json(err)
    }
})

// Get all categories
router.get("/", async (req, res) => {
    
    try{
        const types = await Type.find();
        res.status(200).json(types)


    } catch (err){
        res.status(500).json(err)
    }
})






module.exports = router;