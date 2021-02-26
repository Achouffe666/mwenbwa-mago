import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const RegisterSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    firstname: {type: String},
    lastname: {type: String},
    password: {type: String},
    email: {type: String, unique: true},
    birthday: {type: Date},
    treeCount: {type: Number, default: 3},
    trees: [Number],
    userColor: {type: String, default: "#fff"},
});

RegisterSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Register", RegisterSchema);
