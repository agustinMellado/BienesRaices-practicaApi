import { DataTypes } from "sequelize";
import db from '../config/db.js';

//definimos la tabla que vamos a crear, con su determinada estructura.
const Usuario = db.define('usuarios' ,{ 

    //diferentes columnas de la tabla.
    nombre:{
        type: DataTypes.STRING, //TIPO DE DATO
        allowNull: false //es para que el campo no quede vacio.
    },
    email:{
        type: DataTypes.STRING, //TIPO DE DATO
        allowNull: false //es para que el campo no quede vacio.
    },
    password:{
        type: DataTypes.STRING, //TIPO DE DATO
        allowNull: false //es para que el campo no quede vacio.
    },
    token: DataTypes.STRING, //TIPO DE DATO
    confirmado: DataTypes.BOOLEAN

    //NOTA: Al tener multiples atributos va llave, al tener uno solo no es necesario.
})

export default Usuario