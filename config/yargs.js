const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
         default: false,
         describe: 'Muestra en pantalla la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra la tabla hasta el numero indicado'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true; 
    })
    .argv;

module.exports = argv;