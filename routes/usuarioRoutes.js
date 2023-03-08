import express from 'express';
import { formularioLogin, formularioRegistro, registrar,confirmar, formularioRecuperarPassword,resetPassword} from '../controllers/usuarioController.js';
//inicializo la constante router
const routes = express.Router();

// Routing
routes.get('/login', formularioLogin);
routes.get('/registro', formularioRegistro);

routes.post('/registro', registrar);//envio informacion hacia ese metodo.
// :token es una variable disponible que va a estar en la URL (routing dinamico)
routes.get('/confirmar/:token',confirmar);//ruta para confirmacion de email.
routes.get('/recuperar-password',formularioRecuperarPassword);
routes.post('/recuperar-password',resetPassword);




//zona de exportacion
export default routes;