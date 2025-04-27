//pwd : IIAN9PAvzSMAwYti
//username : soumyasrivast23
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionString=process.env.CONNECTION_STRING;

export const connectDB=()=>{
    //const database=mongoose.connection
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected')) // Confirm successful connection
    .catch((error) => console.error('Database connection error:', error)); // Log connection errors
    //console.log(database);
    const database=mongoose.connection
    database.on('error',(error)=>{
    console.error(error)
    });

    database.once('connected',()=>{
    console.log(`Database connected`)
    });
};

