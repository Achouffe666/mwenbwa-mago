import mongoose from "mongoose";


const RegisterSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    birthday: {type: Date, required: false}
});

Register =  module.exports = mongoose.model('Register', RegisterSchema); 

