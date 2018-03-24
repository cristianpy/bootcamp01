var eventos = require('../controllers/eventos');
var patrocinador = require('../controllers/patrocinadores');

// Todas las rutas de la aplicacion deben ser definidos en este archivo
module.exports = function(router) {
    // Eventos
    router.get('/eventos', eventos.index);
    router.get('/eventos/:id', eventos.show);
    router.post('/eventos', eventos.create);
    router.put('/eventos/:id', eventos.update);
    router.delete('/eventos/:id', eventos.delete);

    // Patrocinadores
    router.get('/patrocinador', patrocinador.index);
    router.get('/patrocinador/:id', patrocinador.show);
    router.post('/patrocinador', patrocinador.create);
    router.put('/patrocinador/:id', patrocinador.update);
    router.delete('/patrocinador/:id', patrocinador.delete);
    //Workshops

    //Otros

    return router;
};