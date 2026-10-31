import * as mascotaRepo from '../repos/mascota.repo.js';

export async function obtenerTodos() {
    return mascotaRepo.obtenerTodos();
}

export async function obtenerPorEspecie(especie) {
    return mascotaRepo.obtenerPorEspecie(especie);
}

export async function obtenerPorId(id) {
    return mascotaRepo.obtenerPorId(id);
}

export async function crear(mascota) {
    return mascotaRepo.crear(mascota);
}

export async function actualizar(id, mascota) {
    return mascotaRepo.actualizar(id, mascota);
}

export async function eliminar(id) {
    return mascotaRepo.eliminar(id);
}