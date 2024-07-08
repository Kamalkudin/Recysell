import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    telephone: { type: String },
    roles: { type: String, default: "user" }
}, { timestamps: true });

userSchema.plugin(passportLocalMongoose);

export default model("User", userSchema);
