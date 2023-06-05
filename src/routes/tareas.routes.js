import  {Router}  from 'express';
import {getTareas, createTarea, updateTarea, getTareasById, deleteTarea} from '../controllers/tareas.controller.js'
const router=Router();

//EndPoints
router.get('/tareas', getTareas);
router.get('/tareas/:id', getTareasById);
router.post('/tareas', createTarea);
router.patch('/tareas/:id',  updateTarea);
router.delete('/tareas/:id', deleteTarea); 

export default router