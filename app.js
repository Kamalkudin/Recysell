import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import userRoutes from "./routes/UserRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import orderRoutes from "./routes/OrderRoutes.js";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/order", orderRoutes);

app.get('/carbon', (req, res) => {
    res.render('carbon');
  });
  app.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });
  app.get('/checkout', (req, res) => {
    res.render('checkout');
  });

app.use("/", productRoutes);

export default app;
