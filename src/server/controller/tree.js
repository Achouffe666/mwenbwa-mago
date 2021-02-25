import Tree from "../models/trees";

exports.getAllTrees = (req, res) => {
    Tree.find()
        .then(tree => res.status(200).json(tree))
        .catch(error => res.status(400).json({error}));
};
