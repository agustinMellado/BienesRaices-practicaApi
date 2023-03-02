
//funcion para generar id unico para usar como token.
const generarId= () =>  Math.random().toString(32).substring(2) + Date.now().toString(32);

export{
    generarId
}