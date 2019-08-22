const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d9fe357cf8c00a7482e7912eefe87cda`);
    const clima = resp.data;
    if (clima.cod === 400) {
        throw new Error('Error, no se encontro informacion para los datos proporcionados');
    }

    return clima.main.temp;

};

module.exports = {
    getClima
};