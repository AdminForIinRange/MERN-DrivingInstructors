const express = require('express')
const {
    getClientProfile,
    getClientProfiles,
    postClientProfile,
    deleteClientProfile,
    patchClientProfile,
 
} = require('../controllers/clientProfileController')

const router = express.Router()

// GET all 
router.get('/', getClientProfiles)

// GET ID
router.get('/:id', getClientProfile)

// POST
router.post('/', postClientProfile)

// DELETE
router.delete('/:id', deleteClientProfile)

// UPDATE
router.patch('/:id', patchClientProfile)

module.exports = router