const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
    {
        country: {type: String, default: "BE"},
        color: {type: String, required: true},
        name: {type: String, required: true},
        icon: {type: String, required: true},
        url: {type: String, required: true},
        created_at: {type: String, required: true},
        updated_at: {type: String, required: true},
        deleted_at: String,
    },
    {collection: "banks"},
);

module.exports = mongoose.model("Bank", bankSchema);
