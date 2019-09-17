const mongoose = require('mongoose');

const Clothes = mongoose.model('Clothes');

module.exports = {

    async index(req, res) {
        const clothes = await Clothes.find({});

        return res.json(clothes);        
    },

    async show(req, res) {
        const clothes = await Clothes.findById(req.params.id);

        return res.json(clothes);
    },

    async store(req, res) {
        const clothes = await Clothes.create(req.body);

        return res.json(clothes);
    },

    async update(req, res) {
        const clothes = await Clothes.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(clothes);
    },

    async delete(req, res) {

        await Clothes.findByIdAndDelete(req.params.id);

        return res.send();
    },


}