//requerimos de las funcionalidades de express 
const express = require('express');

//la variable que guardara las configuraciones de express
const app = express();

//importamos el modulo
const mongoDB = require('./conecction');

//decimos que lo que usamos con express va en formato json
app.use(express.json());

//obtengo estudiantes a partir de un parametro dado
app.get('/estudiantes/:legajo', (pedido, respuesta) => {
    //el legajo es el que se envia por parametro..
    const legajoEstudiante = parseInt(pedido.params.legajo);//si el legajo es numerico.. hay que parsearlo..
    mongoDB.conexionBD()
    .then((conexion) => {
        const controlador = conexion.db().collection('estudiantes');
        controlador.find({legajo: legajoEstudiante}).toArray()
        .then((filas) => respuesta.send(filas))
        .catch((error) => respuesta.send(error));
    });
});

//creo estudiantes
app.post('/estudiantes/create', (pedido, respuesta) => {
    mongoDB.conexionBD()
    .then((conexion) => {
        const controlador = conexion.db().collection('estudiantes');
        controlador.insertOne(pedido.body)//recordar que el .body es el contenido que vamos a enviar..
        .then(respuesta.send("Nuevo estudiane ingresado"))
        .catch((error) => respuesta.send(error));
    });
});

//creo notas
app.post('/notas/create', (pedido, respuesta) => {
    mongoDB.conexionBD()
    .then((conexion) => {
        const controlador = conexion.db().collection('notas');
        controlador.insertOne(pedido.body)
        .then(respuesta.send("Nueva nota ingresada"))
        .catch((error) => respuesta.send(error));
    });
});

//editar notas
app.put('/notas/:id/update', (pedido, respuesta) => {
    const identificador = parseInt(pedido.params.id);
    const modificacion = {$set: pedido.body};//necesario realizar esto aqui afuera, sino da error cuando se manda directamente el pedido.body a actualizar..
    mongoDB.conexionBD()
    .then((conexion) => {
        const constrolador = conexion.db().collection('notas');
        constrolador.updateOne({id:identificador}, modificacion)
        .then(respuesta.send("Nota modificada"))
        .catch((error) => respuesta.send(error));
    });
});

//eliminar nota
app.delete('/notas/:id/delete', (pedido, respuesta) => {
    const filtro = parseInt(pedido.params.id);
    mongoDB.conexionBD()
    .then((conexion) => {
        const constrolador = conexion.db().collection('notas');
        constrolador.deleteOne({id: filtro})
        .then(respuesta.send("Nota eliminada"))
        .catch((error) => respuesta.send(error));
    });
});

//obtener las notas de los estudiantes que aprobaron
app.get('/notas/:codigo/aprobados', (pedido, respuesta) => {
    const filtro = pedido.params.codigo;
    mongoDB.conexionBD()
    .then((conexion) => {
        const constrolador = conexion.db().collection('notas');
        constrolador.find({codigo: filtro}).toArray()
        .then((filas) => respuesta.send(filas))
        .catch((error) => respuesta.send(error));
    });
});

//recordar que se dispone del servidor en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor esta en linea");
});