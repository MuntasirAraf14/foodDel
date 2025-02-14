import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mdmuntasirazad:MuntasirAraf14@cluster0.ghbei.mongodb.net/food-del').then(() => console.log("MongoDB Connected"))
     .catch((err) => console.log(err));
}