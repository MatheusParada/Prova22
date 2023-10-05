const mongoose = require('mongoose')
const Location = mongoose.model('locations', {

    nome: String,
    localizacao: Number



})

module.exports = Location