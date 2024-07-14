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
import Product from "./models/product.js";


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
  app.get('/dashboard', async (req, res) => {
    try {
        const products = await Product.find().select('name stock -_id'); // Fetch product names and stock
        res.render('dashboard', { products: JSON.stringify(products) }); // Pass products as JSON
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).send('Error fetching products');
    }
  });
  app.get('/checkout', async (req, res) => {
    try {
        const productId = req.query.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        const products = [product];

        res.render('checkout', { products });
    } catch (error) {
        console.error('Failed to fetch product:', error);
        res.status(500).send('Error fetching product');
    }
});

  app.get('/index', async (req, res) => {
    try {
        const products = await Product.find();
        res.render('index', { products });
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).send('Error fetching products');
    }
});

app.use("/", productRoutes);

export default app;
