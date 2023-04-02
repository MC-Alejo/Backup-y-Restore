const {Router} = require ('express');
const {getRestore}= require('../controller/restore')
const {verificarExisteFecha} = require('../middlewares/verificaciones');

const router=Router();

router.get('/',verificarExisteFecha,getRestore);


module.exports=router;