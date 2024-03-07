#!/usr/bin/env node
import express from 'express';
import { PORT, dbMongo } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('welcome to mern');

});

app.post('/inventory', async (req, res) => {
    try {
        if (!req.body.item || !req.body.type || !req.body.description || !req.body.price || !req.body.quantity) {
            return res.status(400).send({
                message: "Add all the required fields"
            });
        }

        const newEntry = {
            item: req.body.item,
            type: req.body.type,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500);
    }
})


mongoose.connect(dbMongo).then(() => {
    console.log('connection to the database has been established');
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
