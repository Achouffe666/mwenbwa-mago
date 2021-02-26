import Register from "../models/register";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

exports.createClient = (req, res) => {
    const client = new Register({
        ...req.body,
    });
    /* eslint-disable no-shadow */
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) {
                throw err;
            } else {
                client.password = hash;
                client
                    .save()
                    .then(() =>
                        res.status(201).json({message: "User created !"}),
                    )
                    .catch(error => res.status(400).json({error}));
            }
        });
        /* eslint-disable no-shadow */
    });
};
/* eslint-disable consistent-return */
exports.loginClient = (req, res) => {
    const password = req.body.password;
    Register.findOne({username: req.body.username})
        .then(user => {
            console.log(password, user.password);
            if (!user) {
                return res.status(401).json({error: "user not found"});
            }

            bcrypt.compare(req.body.password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {id: user.id, name: user.name};
                    const sign = jwt.sign(payload, "alanIsCool:)", {
                        expiresIn: "7d",
                    });
                    res.cookie("jwt", sign, {
                        expiresIn: "7d",
                        httpOnly: true,
                        // secure: true
                    });
                    return res.status(200).json({success: true, token: sign});
                }

                return res.status(400).json("Password Incorrect");
            });
        })
        .catch(error => res.status(400).json({error}));
};
/* eslint-disable consistent-return */
exports.getAllUsers = (req, res) => {
    Register.find()
        .then(clients => res.status(200).json(clients))
        .catch(error => res.status(400).json({error}));
};
