import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    firstname: {type: String},
    lastname: {type: String},
    password: {type: String},
    email: {type: String, unique: true},
    birthday: {type: Date},
    treeCount: {type: Number, default: 3},
    userColor: {type: String, default: "#fff"},
});

module.exports = mongoose.model("Register", RegisterSchema);
