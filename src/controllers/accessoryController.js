const router=require('express').Router();

router.get('/create', (rewq, res)=>{
    res.render('accessory/create')
});

module.exports=router;