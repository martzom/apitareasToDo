import  {Router}  from 'express';
import { getbase } from '../controllers/index.controller.js';

const router=Router();

//EndPoints
router.get('/mysql', getbase);

export default router