import Register from "../models/register";

exports.createClient = (req, res) => {
    const client = new Register({
        ...req.body,
    });

    client
        .save()
        .then(() => res.status(201).json({message: "User created !"}))
        .catch(error => res.status(400).json({error}));
};

exports.loginClient = (req, res) => {
    Register.findOne({username: req.body.username})
        .then(user => {
            if (!user || req.body.password !== user.password) {
                return res.status(401).json({error: "user not found"});
            }
            return (
                res.status(200).json({userId: user.lastname, token: "TOKEN"}),
                console.log("user found")
            );
        })
        .catch(
            error => res.status(500).json({error}),
            console.log("not found"),
        );
};

exports.getAllUsers = (req, res) => {
    Register.find()
        .then(clients => res.status(200).json(clients))
        .catch(error => res.status(400).json({error}));
};
