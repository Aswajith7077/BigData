import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  phone: BigInt,
  active: {
    type: String,
    enum: ["YES", "NO"]
  },
  address: [
    {
      street: String,
      zip: Number,
      city: String,
      state: String,
      country: String
    }
  ]
});

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: Number,
    required: true,
    unique: true
  },
  author: {
    firstName: String,
    lastName: String
  },
  publisher: [
    {
      name: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      address: {
        city: {
          type: String,
          require: true
        },
        zip: {
          type: Number,
          require: true
        },
        state: String,
        country: String
      }
    }
  ],
  available: {
    type: String,
    enum: ["YES", "NO"]
  },
  pages: Number,
  summary: String,
  categories: [String],
  Notes: [
    {
      userid: String,
      notes: String
    }
  ],
  referenceuser: {
    type: String,
    default: 'NOT-ISSUED'
  },
  issued_date:{
    type:Date,
    default: Date.now
  },
  return_date:{
    type:Date,
    default:Date.now
  },
  language:{
    type:String,
    required:true,
  }
});


export{
    userSchema,
    bookSchema,
}
