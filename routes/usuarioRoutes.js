import express from 'express';
import { formularioLogin, formularioRegister } from '../controllers/usuarioController.js';
//inicializo la constante router
const routes = express.Router();

// Routing
routes.get('/login', formularioLogin);
routes.get('/registro', formularioRegistro);




//zona de exportacion
export default routes;