var router=require('express').Router();
/** Definiciones de las rutas de la api y los routers manejadores asociados*/
router.use('/api/login', require('./login'));
router.use('/api/signup', require('./register'));
router.use('/api/logout', require('./logout'));
module.exports=router;
