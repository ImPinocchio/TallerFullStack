import express from 'express';
import morgan from 'morgan';
import mascotaRouter from './src/routes/mascota.route.js';
import { miPrimerMiddleware, validarApiKey } from './src/middlewares/global.middleware.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(miPrimerMiddleware);
app.use(express.json());
app.use(morgan('dev'));

app.use('/mascota', mascotaRouter);

app.listen(PORT, ()=>{
    console.log(`API Mascotas está corriendo en el puerto ${PORT}`);
});