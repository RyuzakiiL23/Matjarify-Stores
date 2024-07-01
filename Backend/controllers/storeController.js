const { Store } = require('../models');

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
            return res.status(500).json({message: 'failed to create store'});
        } 
    }

    async update (req, res){
        const id = req.params.id;
        const { name, description } = req.body;
        try{
            await Store.findOne({
                where: {id}
            }).then(async (store) => {
                await store.update({name, description});
            });
            return res.status(200).json({message: 'store updated successfully'});
        }catch (error){
            return res.status(500).json({message: 'failed to update store'});
        }
    }

    async show (req, res){
        const id = req.params.id;
        try{
            await Store.findOne({
                where: {id}
            }).then((store) => {
                return res.status(200).json(store);
            });
        }catch (error){
            return res.status(500).json({message: 'failed to get store entities'});
        }
    }

    async destroy (req, res){
        const id = req.params.id;
        try{
            const store = await Store.findOne({ where: {id} });
            if (!store) return res.status(404).json({message: 'store not found'});
            await store.destroy();
            return res.status(200).json({message: 'store deleted successfully'});
        }catch (error){
            return res.status(500).json({message: 'failed to get store entities'});
        }
    }
}

module.exports = new StoreController();