const Category = require('../models/categoryModel');

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try {
<<<<<<< Updated upstream
            //if user have role = 1 --> admin
            //only admin can create, delete and update category
            const {name} = req.body;
            const category = await Category.findOne({name});
            if(category) return res.status(400).json({msg:"This category alrealy exists."});
            const newCategory = new Category({name});
=======
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "This category already exists."})
>>>>>>> Stashed changes

            const newCategory = new Category({name})

<<<<<<< Updated upstream
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    deleteCatygory: async(req,res) =>{
        try {
            await Category.findByIdAndDelete(req.params.id);
            res.json({msg: "Delete a Category"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    updateCatygory: async(req,res) =>{
        try {
            const{name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name});

            res.json({msg: " Update a category"});
=======
            await newCategory.save()
            res.json({msg: "Created a category"})
>>>>>>> Stashed changes
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = categoryCtrl