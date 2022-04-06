const express = require('express')
const { registeruser,fetchuser,fetchuserbyid,deletuserbyid,updateuserbyid} = require('../Controllers/userControllers')
const router = express.Router()

router.post('/',registeruser)
router.get('/',fetchuser)
router.get('/:id',fetchuserbyid)
router.delete('/:id',deletuserbyid)
router.put('/:id',updateuserbyid)

module.exports = router