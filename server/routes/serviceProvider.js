const express = require('express')
const {
    getServiceProviders,
    getServiceProvider,
    postServiceProvider,
    deleteServiceProvider,
    patchServiceProvider
 
} = require('../controllers/serviceProviderController')

const router = express.Router()

// GET all 
router.get('/', getServiceProviders)

// GET a single 
router.get('/:id', getServiceProvider)

// POST a new workout
router.post('/', postServiceProvider)

// DELETE a workout
router.delete('/:id', deleteServiceProvider)



// UPDATE a workout
router.patch('/:id', patchServiceProvider)

module.exports = router