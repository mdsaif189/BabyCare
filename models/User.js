const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Full Name Field Is Mendatory"]
    },

    username: {
        type: String,
        required: [true, " UserName Field Is Mendatory"],
        unique: true
    },

    email: {
        type: String,
        required: [true, " Email Field Is Mendatory"],
        unique: true
    },

    phone: {
        type: String,
        required: [true, " Phone Field Is Mendatory"]
    },
    password: {
        type: String,
        required: [true, " Password Field Is Mendatory"]
    },

    role: {
        type: String,
        default: "Admin"
    },

    otp: {
        type: Number,
        default: -876345678
    },

    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const User = new mongoose.model("User", UserSchema)

module.exports = User