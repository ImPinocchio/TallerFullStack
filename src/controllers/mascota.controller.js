import * as service from '../services/mascota.service.js';

export const obtenerTodos = async (req, res) => {
    const resultado = await service.obtenerTodos();
    res.json(resultado);
}

export const obtenerPorEspecie = async (req, res) => {
    const { especie } = req.params;
    if(especie === undefined) {
        res.status(400).send('Por favor especificar la especie');
        return;
    }
    const mascotas = await service.obtenerPorEspecie(especie);
    res.json(mascotas);
}

export const obtenerPorId = async (req, res) => {
    const { id } = req.params;
    if(id === undefined) {
        res.status(400).send('Por favor especificar el id');
        return;
    }
    if(isNaN(id)){
        res.status(400).send('El Id debe ser un número');
        return; 
    }
    const parsedId = parseInt(id);
    const mascota = await service.obtenerPorId(parsedId);
    
    if(!mascota || mascota.length === 0) { // mascota == null o arreglo vacío
        res.status(404).send(`Mascota con id ${parsedId} no existe`);
        return;
    }
    res.json(mascota);
}

export const crear = async (req, res) => {
    const mascota = req.body;
    const mascotaCreada = await service.crear(mascota);
    res.status(201) //Creado
       .json({
        mensaje: "Mascota creada", mascota: mascotaCreada
       });
}

export const actualizar = async (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    const parsedId = parseInt(id);
    
    const mascotaExistente = await service.obtenerPorId(parsedId);
    if(!mascotaExistente || mascotaExistente.length === 0){
        res.status(404)
            .json({ mensaje: `Mascota con id ${parsedId} no existe` });
                     
        return;
    }
    
    const mascotaActualizada = await service.actualizar(parsedId, datos);
    res.json({mensaje: 'Mascota fue actualizada', mascota: mascotaActualizada});
}

export const eliminar = async (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    
    const mascotaExistente = await service.obtenerPorId(parsedId);
    if(!mascotaExistente || mascotaExistente.length === 0){
        res.status(404)
            .json({ mensaje: `Mascota con id ${parsedId} no existe` });
                     
        return;
    }
    
    await service.eliminar(parsedId);
    res.json({mensaje: 'Mascota eliminada'});
}