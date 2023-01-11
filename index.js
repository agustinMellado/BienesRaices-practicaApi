import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js" //importacion de archivo
//Crear la app
const app = express()


//habilitar pug
//usamos view engie y especificamos que es pug
app.set('view engine', 'pug')
app.set('views','./views')

// Routing
app.use('/auth', usuarioRoutes)

//definir un puerto y arrancar el proyecto.
const port = 3000;
//conecto la app al puerto.
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});