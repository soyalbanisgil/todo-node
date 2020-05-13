const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    default: true,
    alias: 'c',
    type: 'boolean'
}

const argv = require('yargs')
                .command('crear', 'Crear una nueva tarea', {
                        descripcion
                })
                .command('actualizar', 'Actualizar tarea', {
                        descripcion,
                        completado
                })
                .command('borrar', 'borrar la tarea', {
                        descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}


//consifurar comandos
//comando crear --descripcion
//comando actualizar -d --completado true
// --help