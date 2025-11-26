// src/routes/v2/customers.ts

import { Router } from 'express';
import { getv2Customers } from '../../controllers/customersController';


const router = Router();
router.get('/customers', getv2Customers);


export default router;