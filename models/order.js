import { Schema, model} from "mongoose";

const orderSchema = new Schema({

  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default model("Order", orderSchema);