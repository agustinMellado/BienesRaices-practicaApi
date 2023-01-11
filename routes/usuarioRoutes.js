import express from 'express';
//inicializo la constante router
const routes = express.Router();

// Routing
routes.get('/', function (req, res) {
    res.json({msg:'Hola mundo en express'})
});




//zona de exportacion
export default routes;