import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv:/:@cluster0.tforwac.mongodb.net/DILKUSH') #give your own mongodb link
    .then(()=>console.log("DB Connected"));
}
