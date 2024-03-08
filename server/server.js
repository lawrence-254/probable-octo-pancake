#!/usr/bin/env node
import express from 'express';
import cors from 'cors';
import { PORT, dbMongo } from './config.js';
import mongoose from 'mongoose';
import { Inventory } from './models/inventory.js';
import inventoryRoutes from './routes/inventoryRoutes.js';

const app = express();
//parsing to json middleware
app.use(express.json());
//cors handling policy middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['content-type']
}));
//app root path
app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('welcome to mern');

});
app.use('/inventory', inventoryRoutes);

// initializing mongo dd database
mongoose.connect(dbMongo).then(() => {
    console.log('connection to the database has been established');
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
