require("dotenv").config();
import mongoose from "mongoose";

import { startApolloServer } from "./app";
import { DB_OPTIONS, DB_URI } from "./config";

const startApp = async () => {
  try {
    // Connect database
    await mongoose.connect(DB_URI, DB_OPTIONS);
    console.log(`Connected databse`);

    // Connect cache store

    // Start Apollo server
    await startApolloServer();
  } catch (error) {
    console.error(error);
  }
};

startApp();
