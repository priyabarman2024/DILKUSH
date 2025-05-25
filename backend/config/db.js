import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://priyamanit2024:Toffee2024@cluster0.tforwac.mongodb.net/DILKUSH')
    .then(()=>console.log("DB Connected"));
}