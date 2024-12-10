import mongoose from "mongoose";
import { bookSchema, userSchema } from "./schemaDefinition.js";

const User = new mongoose.model('Users',userSchema);
const Book = new mongoose.model('Books',bookSchema);

export{
    User,Book
};
