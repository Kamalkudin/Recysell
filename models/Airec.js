// import dotenv from 'dotenv';
// dotenv.config();
// import mongoose from 'mongoose';
// import Groq from 'groq-sdk';

// mongoose.connect("mongodb+srv://akmalmuhfauzan:dAo2RBqZdsjNVYrS@psi.ihctboc.mongodb.net/PSI?retryWrites=true&w=majority&appName=PSI", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", (error) => {
//   console.log(error);
// });

// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// const completionSchema = new mongoose.Schema({
//   content: String
// });

// const Completion = mongoose.model("Completion", completionSchema);

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY, // Use the correct environment variable
// });

// async function main() {
//   // Use Groq to generate a completion
//   const completion = await groq.chat.completions.create({
//     messages: [{ role: 'user', content: 'Hello, world!' }],
//     model: 'llama3-8b-8192',
//   });

//   const completionContent = completion.choices[0].message.content;

//   console.log(completionContent);

//   // Save the completion to the database
//   const newCompletion = new Completion({ content: completionContent });
//   await newCompletion.save((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Completion saved successfully");
//     }
//   });
// }

// main();
