import express from "express";

//Crear la app
const app = express()

// Routing
app.get('/', function (req, res) {
    res.json({msg:'Hola mundo en express'})
});


//definir un puerto y arrancar el proyecto.
const port = 3000;
//conecto la app al puerto.
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});