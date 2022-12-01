const mongoose = require("mongoose");

const EsquemaPirata = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre del Pirata es requerido"],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
    },
    image: {
        type: String,
        required: [true, "La URL de la imagen es requerida"]
    },
    treasureChests: {
        type: Number,
        required: [true, "Por favor selecciona el numero de cofres de tesoro"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Se requiere una frase del pirata"]
    },
    crewPosition: {
        type: String,
        required: [true, "Se requiere el puesto de la tripulacion del pirata"],
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
    
}, {timestamps: true, versionKey: false})

//timestamps crea los campos de createAt y updateAt
//versionKey: false elimina el atributo _v

const Pirata = mongoose.model("piratas", EsquemaPirata);

module.exports = Pirata;