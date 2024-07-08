import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    weight: { type: Number, required: true },
    image: { type: String},
    carbonFootprint: { type: Number}
}, { timestamps: true });

export default model("Product", productSchema);
