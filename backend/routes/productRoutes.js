const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// CREATE PRODUCT
router.post("/", async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ ALL PRODUCTS
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// UPDATE PRODUCT
router.put("/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedProduct);
});

// DELETE PRODUCT
router.delete("/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
});

module.exports = router;
