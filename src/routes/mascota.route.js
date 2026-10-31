import { Router } from 'express';
import * as controller from '../controllers/mascota.controller.js';
import { validarApiKey } from '../middlewares/global.middleware.js';

const router = Router();

router.get('/', controller.obtenerTodos);

router.get('/:id', (req, res, next) => {
    if (isNaN(req.params.id)) {
        return next('route'); 
    }
    next(); 
}, controller.obtenerPorId);

router.get('/:especie', controller.obtenerPorEspecie);

router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

export default router;