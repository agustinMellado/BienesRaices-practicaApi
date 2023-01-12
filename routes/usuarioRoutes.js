import express from 'express';
import { formularioLogin } from '../controllers/usuarioController.js';
//inicializo la constante router
const routes = express.Router();

// Routing
routes.get('/login', formularioLogin);




//zona de exportacion
export default routes;