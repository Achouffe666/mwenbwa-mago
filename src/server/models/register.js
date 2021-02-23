import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    password: {type: String},
    email: {type: String, unique: true},
    birthday: {type: Date},
});

module.exports = mongoose.model("Register", RegisterSchema);
