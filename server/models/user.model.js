const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter pirates name"],
            minlength: [2, "Name must be at least 2 characters long"]
        },
        chests: {
            type: Number,
        },
        image: {
            type: String,
            required: [true, "An image is required"]
        },
        phrase: {
            type: String,
            required: [true, "A Phrase is required"]
        },
        position: {
            type: String,
            required: [true, "A position is required"]
        },
        peg: {
            type: Boolean,
        },
        eye: {
            type: Boolean,
        },
        hook: {
            type: Boolean,
        },

    }, 
    {timestamps: true}
); 

const User = mongoose.model("User", UserSchema);
module.exports = User;