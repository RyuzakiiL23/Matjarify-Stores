const { error } = require('console');
const fs = require('fs').promises;
const { Category } = require('../models');
const { where } = require('sequelize');

class CategoryController {

    async create(_req, res) {
        try {
            const data = await fs.readFile('./basedCategories.json', 'utf-8');
            const categories = JSON.parse(data);
            for (const [key, value] of Object.entries(categories)) {
                try {
                    await Category.findOne({
                        where: { name: key },
                    }).then(async (category) => {
                        if (category) {
                            await category.update({ description: value });
                        } else {
                            await Category.create({ name: key, description: value });
                        }
                    });
                } catch (error) {
                    return res.status(500).json({ message: `Failed to upsert category` });
                }
            }
            return res.status(200).json({message: 'categories created successfully'});
            }catch (error) {
                return res.status(500).json({message: `failed to create category`});
            }    
    }

    async update(req, res) {
        const id = req.params.id;
        const { name, description} = req.body;
        try{
            await Category.findOne({
                where: {id}
            }).then(async (category) => {
                await category.update({name, description});
            });
            return res.status(200).json({message: `category updated successfully`});
        }catch (error){
            return res.status(500).json({message: `failed to update category`});
        }
    }

    async show(req, res) {
        const id = req.params.id
        try{
            const category = await Category.findOne({where: {id}});
            if (!category) return res.status(404).json({message: 'category not found'});
            return res.status(200).json({category});
        }catch (error){
            return res.status(500).json({message: `failed to get category`});
        }
    }

    async destroy(req, res) {
        const id = req.params.id
        try{
            const category = await Category.findOne({where: {id}});
            if (!category) return res.status(404).json({message: 'category not found'});
            await category.destroy();
            return res.status(200).json({message: 'category deleted successfuly'});
        }catch (error){
            return res.status(500).json({message: `failed to delete category`});
        }
    }
}


module.exports = new CategoryController();