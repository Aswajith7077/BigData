import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Book, User } from './Models.js';

dotenv.config();

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);





const app = express();

app.use(express.json());

app.post('/adduser',(req,res)=>{
    const newUser = new User(req.body);
    newUser.save()
        .then(()=>{
            res.send({
                status:200,
                message:"New User Created"
            })
        })
        .catch((error)=>{
            res.send({
                status:400,
                message:`User Creation Failed : ${error.message}`
            })
        })
});

app.post('/modifyuser',(req,res)=>{
    const modifiedUser = new User(req.body);
    modifiedUser
})


app.post('/addbook',(req,res)=>{

    const newBook = new Book(req.body);
    newBook.save()
        .then(()=>{
            res.send({
                status:200,
                message:"New book Added",
            })
        })
        .catch((error)=>{
            res.send({
                status:400,
                message:`Failed to add Book : ${error.message}`
            })
        })
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the port ${process.env.PORT}`);
});








