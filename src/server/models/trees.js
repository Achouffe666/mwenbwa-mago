import mongoose from "mongoose";

const treeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
        },
        coordinates: {type: [Number]},
    },
    height: {type: Number},
    latinName: {type: String},
    diametre_cime: {type: Number},
    circonf: {type: Number},
    color: {
        type: String,
    },
    leafs: {
        type: Number,
    },
    treeValue: {
        type: Number,
    },
    owner: {
        type: String,
    },
});

export default mongoose.model("Tree", treeSchema);
