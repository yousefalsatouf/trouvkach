const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const terminalSchema = new mongoose.Schema(
    {
        bank: ObjectId,
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true},
        address: String,
        empty: Boolean,
        created_at: {type: String, required: true},
        updated_at: {type: String, required: true},
        deleted_at: String,
    },
    {collection: "terminals"},
);

module.exports = mongoose.model("Terminal", terminalSchema);
