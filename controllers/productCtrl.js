const Products = require('../models/productModel')

const productCtrl = {
    getProducts: async(req, res) => {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.massage})
        }
    }
}

module.exports = productCtrl