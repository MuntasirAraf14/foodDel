import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        const image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: image_filename,
            category: req.body.category,
        });

        await food.save();
        res.status(201).json({ success: true, message: "Food Added" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Food Not Added" });
    }
};

const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({ success: true, data: food });
    } catch (error) {
        console.error(err);
        res.json({ success: false, message: "Food Not Found" });
    }

}

//remove food item

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findByIdAndDelete(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food Not Found" });
        }
        fs.unlink(`./uploads/${food.image}`,()=>{});

        res.json({ success: true, message: "Food Deleted" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Food Not Deleted" });
    }
}

export { addFood, listFood, removeFood };
