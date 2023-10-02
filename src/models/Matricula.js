const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MatriculaSchema = new Schema ({
    nombre: String,
    edad:Number
}, {versionKey:false})
module.exports = mongoose.model('matriculas', MatriculaSchema)