import express from 'express';
//inicializo la constante router
const routes = express.Router();

// Routing
routes.get('/login',(req, res) => {
    //funcion render toma la ubicacion de donde se encuentra la vista y la muestra.
    res.render('auth/login')
});




//zona de exportacion
export default routes;