const Entry = require('../models/entryModel.js')

module.exports = {
    index, 
    show
}

async function index(req, res) {
    try {
        const entries = await Entry.find({}).populate('category?')
        entries.sort((a, b) => a.category.sortOrder - b.category.sortOrder)
        res.status(200).json(entries)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

async function show(req, res) {
    try {
        const entries = await Entry.findById(req.params.id)
        res.status(200).json(entries)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}