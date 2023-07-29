const {Category} = require("../models/category");
const express = require('express');
const router = express.Router();


router.get("/", async(req, res) =>{
  const categoryList = await Category.find();
  if(!Category)
  return res.status(500).json({success: false, message: "not found"})
  res.status(200).send(categoryList)
})


router.post("/", async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    });

    category = await category.save();

    if (!category)
      return res.status(404).send("Category not created");

    res.send(category);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.delete("/:id", (req,res) =>{
  const passedId = req.params.id;
  Category.findById(passedId).then(Category =>{
    if (Category) {
      return res.status(500).json({success: true, message: "well deleted"})
    }
    else{
      return res.status(404).json({success: false, message: " Not found"})
    }
  }).catch((err) =>{
   return res.send(err)
  })
})

module.exports =router;