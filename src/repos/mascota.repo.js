import pool from '../config/db.js';

export async function obtenerTodos() {
    const query = 'SELECT * FROM mascota ORDER BY id';
    const { rows } = await pool.query(query);
    return rows;
}

export async function obtenerPorEspecie(especie) {
    const query = 'SELECT * FROM mascota WHERE especie = $1';
    const { rows } = await pool.query(query, [especie]);
    return rows;
}

export async function obtenerPorId(id) {
    const query = 'SELECT * FROM mascota WHERE id = $1 ';
    const { rows } = await pool.query(query, [id]);
    return rows;
}

export async function crear(mascota) {
    const { nombre, especie, esta_vacunado, fecha_nacimiento } = mascota;
    const query = `INSERT INTO mascota (nombre, especie, esta_vacunado, fecha_nacimiento)
                   VALUES ($1, $2, $3, $4)
                   RETURNING id, nombre, especie, esta_vacunado, fecha_nacimiento`;
    const { rows } = await pool.query(query, [nombre, especie, esta_vacunado, fecha_nacimiento]);
    return rows[0];
}

export async function actualizar(id, mascota) {
    const { nombre, especie, esta_vacunado, fecha_nacimiento } = mascota;
    const query = `UPDATE mascota SET
                   nombre=$2,
                   especie=$3,
                   esta_vacunado=$4,
                   fecha_nacimiento=$5
                   WHERE id = $1
                   RETURNING id, nombre, especie, esta_vacunado, fecha_nacimiento`;
    const { rows } = await pool.query(query, [id, nombre, especie, esta_vacunado, fecha_nacimiento]);
    return rows[0];
}

export async function eliminar(id) {
    const query = 'DELETE FROM mascota WHERE id = $1';
    const { rowCount } = await pool.query(query, [id]);
    return rowCount > 0;
}