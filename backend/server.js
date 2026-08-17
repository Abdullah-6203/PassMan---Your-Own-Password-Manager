import express from "express";
const app = express()
const port = 3000
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from "cors";
dotenv.config();


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'PassMan';
app.use(cors());
app.use(bodyParser.json());

client.connect();

//Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    try {
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: err.message});
    }
})

//Save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    try {
        // eslint-disable-next-line no-unused-vars
        const findResult = await collection.insertOne(password);
        res.json({success: true, message: "Password saved successfully", result: findResult});
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: err.message});
    }
})

//Update a password by ID
app.put('/', async (req, res) => {
    const { id, ...rest } = req.body
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    try {
        delete rest._id;
        // eslint-disable-next-line no-unused-vars
        const findResult = await collection.updateOne({ id }, { $set: rest });
        res.json({success: true, message: "Password updated successfully", result: findResult});
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: err.message});
    }
})

//Delete a password by ID
app.delete('/', async (req, res) => {
    const { id } = req.body
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    try {
        // eslint-disable-next-line no-unused-vars
        const findResult = await collection.deleteOne({ id });
        res.json({success: true, message: "Password deleted successfully", result: findResult});
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: err.message});
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})