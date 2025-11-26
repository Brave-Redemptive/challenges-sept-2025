// src/routes/v1/customers.ts


import { NextFunction, Request, Response, Router } from 'express';
import { fetchLegacyCustomers } from '../../services/legacyClient';
const router = Router();
router.get('/customers', async(req: Request, res: Response, next: NextFunction)  => {
    try{
    const data = await fetchLegacyCustomers();
    res.json({source: 'raw-legacyData', data})
    }catch(err){
        next(err)
    }
})

export default router;

