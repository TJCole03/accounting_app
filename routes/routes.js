const express = require('express')
const router = express.Router()

router.post('/', handleSubmit)
router.get('/', listEntries)
router.get('/:id', getSpecEntry) //Get Specific Entry

module.export = router