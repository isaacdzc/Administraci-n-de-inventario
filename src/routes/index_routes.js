import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    res.send('Si esto es visible, compiló hijueputaaa')});
    
export default router;