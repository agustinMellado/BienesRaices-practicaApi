import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js" //importacion de archivo
import db from './config/db.js';
//Crear la app
const app = express()

//habilitar lecturas de datos de formularios
app.use(express.urlencoded({extended:true}))

//Conexion a la base de datos
//aplicamos try /catch en caso que se encuentre errores.
try{
    await db.authenticate();
    db.sync();//sincroniza con la bd
    console.log('Conexion correcta a la base de datos')
}catch(error){
    console.log(error)
}

//habilitar pug
//usamos view engie y especificamos que es pug
app.set('view engine', 'pug')
app.set('views','./views')
//carpeta publica
app.use(express.static('public'))


// Routing
app.use('/auth', usuarioRoutes)



//definir un puerto y arrancar el proyecto.
const port = process.env.PORT || 3000;//TOMA EL PUERTO ASIGNADO O POR DEFECTO 3000
//conecto la app al puerto.
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});