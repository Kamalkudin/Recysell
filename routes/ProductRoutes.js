import express from  "express";
import Product from "../models/product.js";

const router = express.Router();

router.post("/tambah-products", async (req, res) => {
    try{

        const {name, desc, category, price, stock, weight} = req.body;

        const product = await Product.create({
            name: name,
            desc: desc,
            category: category,
            price: price,
            stock: stock,
            image: image,
            weight: weight
        });


        if(!product) return res.status(500).json({error: "produk gagal untuk ditambahkan"});

        res.status(200).json({message: "produk berhasil ditambahkan", product});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/show-products', async (req, res, next) => {
    try{

        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get("/:name", async (req, res, next) => {
    try {
        const product = await Product.findOne({ name: req.params.name });

        if (!product) {
            return res.status(404).json({ message: "Product tidak dapat ditemukan" });
        }

        res.status(200).json(product);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.delete("/delete/:id", async(req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        await product.deleteOne();

        res.status(200).json({ message: "produk berhasil dihapuskan"});
    } catch (error) {

        if (error.name == "CastError"){
            return res.status(400).json({ error: "id produk tidak valid" });
        }
        return res.status(500).json({ error: error.message });
    }
});

router.put("/update/:id", async (req, res) => {
    try{
        let product = await Product.findById(req.params.id);

        const {name, desc, category, price, stock, weight} = req.body;

        const data = {
            name: name,
            desc: desc,
            category: category,
            price: price,
            stock: stock,
            weight: weight,
        }

        product = await Product.findByIdAndUpdate(req.params.id, data, {new: true, runValidators: true});

        res.status(200).json({message: "produk berhasil diupdate"});

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get("/product-page", async (req, res) => {
    try {
        const products = await Product.find();  
        res.render("product", { products });  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/buy', async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await Product.findById(productId);
        
        if (!product) {

            return res.redirect('/?error=Product not found');
        }

        product.stock -= 1;
        await product.save();


        res.redirect('/?success=Purchase successful');
    } catch (error) {

        res.redirect('/?error=' + encodeURIComponent(error.message));
    }
});

router.get("/product/:name", async (req, res) => {
    try {
        const product = await Product.findOne({ name: req.params.name });

        if (!product) {
            return res.status(404).render('404');
        }

        res.render('productDetails', { product }); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.render("index", { products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/details/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.render("productDetails", { product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get("/productdetails/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.render("productDetails", { product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




// Removed the duplicate route for "/checkout/:id"

export default router;