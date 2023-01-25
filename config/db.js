import Sequelize from "sequelize";

const db = new Sequelize('bienesraices_node_mvc', 'root', 'root1941', {
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