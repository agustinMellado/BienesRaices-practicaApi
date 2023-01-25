import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({path:'.env'})

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: 'localhost',
    port: 3306, //Puerto por defecto para mysql
    dialect: 'mysql',
    define: {
        timestamps: true,
    },
    //Configura como sera el comportamiento para conexiones nuevas o existentes.
    pool: {
        max: 5,//Maximo de conexiones a mantener.
        min: 0,//Minimo, si no hay nada tratara de desconectar todo para liberar recursos.
        acquire: 30000, // Lo que tardara en elavorar una conexion o marcar un ERROR.
        idle: 10000 // Lo que tarda en finalizar la conexion sin movimiento.
    },
    operatorAliases: false

});

export default db;