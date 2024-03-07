#!/usr/bin/env node
import express from 'express';
import { PORT, dbMongo } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('welcome to mern');

});



mongoose.connect(dbMongo).then(() => {
    console.log('connection to the database has been established');
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
