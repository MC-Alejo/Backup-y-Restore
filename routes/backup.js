const {Router} = require ('express');
const {postBackup}= require('../controller/backup')

const router=Router();

router.post('/',postBackup)

module.exports=router;