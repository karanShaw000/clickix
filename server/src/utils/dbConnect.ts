import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const dbUrl = process.env.DB_URL as string;
const dbConnect = async () => {
  try {
    const dbOptions: mongoose.ConnectOptions = {
      dbName: "clickix"
    }
    console.log(`Connecting to database named ${dbOptions.dbName}`);
    await mongoose.connect(dbUrl, dbOptions)
    console.log("Connected to the Database")
  } catch (error) {
    console.log(error)
  }
}

export default dbConnect;

