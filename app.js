const axios = require('axios');

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${ coors.direccion } es ${ temp }`;
};


getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));