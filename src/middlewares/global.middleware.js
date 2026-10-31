export function miPrimerMiddleware(req, res, next) {
    console.log('Acabo de recibir una petición');
    next();
}

export function validarApiKey(req, res, next) {
     
    const apiKeyHeader = process.env.API_KEY_HEADER || 'x-api-key';
    const apiKey = process.env.API_KEY || '12345';

    if(req.headers[apiKeyHeader] !== apiKey){
        console.log('Petición proviene de un usuario no autorizado');
        return res.status(401).json({ mensaje: 'No autorizado'});
    }

    next();
}