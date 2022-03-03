import { ConnectOptions } from "mongoose";

export const {
  NODE_ENV = "developer",
  PORT = 3000,
  // Database environment
  DB_USERNAME = "test",
  DB_PASSWORD = "test",
  DB_HOST = "localhost",
  DB_PORT = 27017,
  DB_NAME = "test",
  // Cache environment
} = process.env;

export const DB_URI = `mongodb://${DB_USERNAME}:${encodeURIComponent(
  DB_PASSWORD
)}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export const DB_OPTIONS : ConnectOptions = {
	
}
