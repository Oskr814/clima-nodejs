const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

module.exports = {
    argv
};