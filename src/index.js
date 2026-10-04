import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

console.log("Checking URI: ", process.env.MONGODB_URI);

connectDB()
.then(() => {
    console.log("Database connection successful!");
})
.catch((err) => {
    console.log("Mongo db connection failed !!! ", err);
});
/*
import express from "express"
const app = express()


// iff use 
(async () => {
    try{
     await mongoose.connect(`${process.env.MONGOOD_URI}/${DB_NAME}`)
     app.on("error" , ()=>{console.log("ERROR:",error);throw error })

     app.listen(process.env.PORT,()=> {
       console.log(`App is listening on port ${process.env.PORT}`) ;
     })
    } catch(error){
        console.error("ERROR" , error)
        throw err

    }
})() 
    */