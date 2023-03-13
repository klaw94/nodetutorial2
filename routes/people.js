const express = require('express')
const router = express.Router()

const {getPeople, createPerson, updatePerson, deletePerson} = require('../controllers/people')

//We take the functions to a new folder (controllers) to make it cleaner
//You dont need to send req and res, they send automatically

router.get('/', getPeople)
  
router.post('/', createPerson)
  
router.put('/:id', updatePerson)
  
router.delete('/:id', deletePerson)

module.exports = router