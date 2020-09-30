import { response, Router } from 'express'
import VendorsController from '../controllers/vendors_controller'

const router = Router()

router.get('/getVendors', async (req, res) => {
    const resultado = await new VendorsController().getAllVendors()
    res.json(resultado)
})

/*router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('vendors').findOne({_id : ObjectID(id)});
    res.json(result);
})*/

router.post('/newVendor', async (req, res) => {
    const vendor = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        category: req.body.category
    };
    const result = await new VendorsController.newVendor(vendor);
    console.log(result)
    res.json({"data" : result});
})

export default router;
