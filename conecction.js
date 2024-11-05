//necesario instanciar un objeto MongoClient que requiera a mongodb para conectarnos a la BD
const {MongoClient} = require('mongodb');

//instanciamos el string de conexion al que se conectara nuestro cliente
const client = new MongoClient('mongodb://localhost:27017/universidad');

//la siguiente funcion flecha retorna la conexion del cliene y el objeto de conexion
//si falla retorna error
const conexionBD = () => {
    return client.connect()
    .then((dbClient) => {return dbClient})
    .catch((error) => {return error});
}

//exportamos el modulo
module.exports = {conexionBD};