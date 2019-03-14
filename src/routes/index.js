const express=require('express');
const router=express.Router();
const stripe=require('stripe')('sk_test_x8BRFj4JmbOjKo2b1OqFHq11');
router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/checkout',async(req,res)=>{
 const customer= await stripe.customer.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
   const charge=await stripe.charges.create({
        amout:'3000',
        currency:'usd',
        customer: customer.id,
        description: 'example'
    });
    res.send('recibido');
});

module.exports=router;