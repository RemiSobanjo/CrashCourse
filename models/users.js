const mongoose = require("mongoose");
const { plugin } = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: 
            /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/
        },
        password: { type: String, required: true },
    },
    { timestamps: true}
);


module.exports = mongoose.model("Users", userSchema);