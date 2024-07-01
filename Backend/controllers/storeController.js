const { Store } = require('../models');
const jwt = require('jsonwebtoken');

class StoreController {
    async create (req, res){
        const { name, description, category_id } = req.body;
        try{
            await Store.create({
                name,
                description,
                category_id,
                admin: req.user.user_id
            });
            return res.status(200).json({message: 'store created successfully'});
        }catch (error){
            return res.status(500).json({message: 'failed to create store'})
        } 
        
    }

    async update (req, res){
        
    }

    async show (_req, res){
        
    }

    async destroy (req, res){
        
    }
}

module.exports = new StoreController();