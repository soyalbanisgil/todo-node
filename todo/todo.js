const fs = require('fs');

let listado = [];

const guardarDB = () => {

    let data = JSON.stringify(listado);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
      });

}

const cargarDB = () => {

    try {
        listado = require('../db/data.json')
    } catch (error) {
        listado = [];
    }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listado.push(porHacer);

    guardarDB();
    
    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listado;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    
    let index = listado.findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listado[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false
    }

}

const borrar = (descripcion) =>{

    cargarDB();

    let nuevoListado = listado.filter(tarea => tarea.descripcion !== descripcion);

    console.log(nuevoListado)

    if(listado.length === nuevoListado.length){
        return false
    } else {
        listado = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}