import express from 'express';
import { formularioLogin, formularioRegistro, registrar, formularioRecuperarPassword} from '../controllers/usuarioController.js';
//inicializo la constante router
const routes = express.Router();

// Routing
routes.get('/login', formularioLogin);
routes.get('/registro', formularioRegistro);

routes.post('/registro', registrar);//envio informacion hacia ese metodo.
routes.get('/recuperar-password',formularioRecuperarPassword);




//zona de exportacion
export default routes;