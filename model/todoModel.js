
const mongoose = require("mongoose")
const {Schema} = mongoose


const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const todoModel = mongoose.model('/todo', todoSchema)

module.exports = todoModel

// 1. protita collection er jonno ekta model thakbe. Jemon Products ekta model, User ekta model. model tai amar db te save thakbe.
// ekhane Schema ke niye ashlam mongoose theke distructure kore. 
// ekhane new ta ekta constructor. ekhane new dilei function takey ekta object banay fele 
 
// 2. collection hoitese ekta folder er bhitore onek files jegula rakha hoy oigula.
// Collection ta bananor jei process ase oi process tai hocche Schema. Ar model tai hocche schema

// 3. ekhon ami model ta banaisi todoSchema jeita ami store korbo todo naamer collection er bhitore. ar ei todo model er under title/name/description gula thakbe.  user banaite ei field gula dite hobe
