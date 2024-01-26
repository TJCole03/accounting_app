const Entry = require('../models/entryModel.js')

// module.exports = {
//     index, 
//     show
// }

exports.index = async (req, res) => {
    try {
        const entries = await Entry.find({}).populate('category?')
        entries.sort((a, b) => a.category.sortOrder - b.category.sortOrder)
        res.status(200).json(entries)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

exports.show = async (req, res) => {
    try {
        const entries = await Entry.findById(req.params.id)
        res.status(200).json(entries)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

//UP NEXT: GET YOUR SRC MATERIAL SEPARATED INTO PAGES. SET UP LOGIC TO SIMPLY MOVE DATA FROM ONE PAGE
// TO ANOTHER. WORK BACKWARDS FROM THERE TO GET IT MOBILE FRIENDLY
