const mongoose = require('mongoose')

const poiSchema = new mongoose.Schema({
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: true
    },
    display: {
        type: Boolean,
        default: 1
    },
    phone: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    webpage: {
        type: String,
        required: false
    },
    hours_on: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('POI', poiSchema)