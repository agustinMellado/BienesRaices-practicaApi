import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
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
},
{
    hooks: {
        //Antes que se cree, interceptamos el password y lo encriptamos.
        beforeCreate: async function(usuario){
            
            const salt= await bcrypt.genSalt(10)//encriptamos la password
            usuario.password=await bcrypt.hash(usuario.password, salt);
        }
    }
})

export default Usuario