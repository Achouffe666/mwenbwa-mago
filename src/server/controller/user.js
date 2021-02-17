import Register from "../models/register";

exports.createClient = (req, res) => {
    const client = new Register({
        ...req.body,
    });

    // cannot read proprety lastname of undifined (bodyparser?)
    client
        .save()
        .then(() => res.status(201).json({message: "Objet enregistré !"}))
        .catch(error => res.status(400).json({error}));
};

exports.getAllUsers = (req, res) => {
    Register.find()
        .then(clients => res.status(200).json(clients))
        .catch(error => res.status(400).json({error}));
};
