import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
//export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/matricula";

export const MONGODB_URI ="mongodb+srv://Admin:admin@matricula.mej4nql.mongodb.net/?retryWrites=true&w=majority";