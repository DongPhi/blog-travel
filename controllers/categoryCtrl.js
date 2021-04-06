const Category = require('../models/categorymodel');

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    createCategory: async(req, res) =>{
        try {
            //if user have role = 1 --> admin
            //only admin can create, delete and update category
            const {name} = res.body;
            const category = await Category.findOne({name});
            if(category) return res.status(400).json({msg:"This category alrealy exists."});
            const newCategory = new Category({name});

            await newCategory.save();
            res.json({msg: "Create a category"});

            res.json('Check admin success');
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = categoryCtrl