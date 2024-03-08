#!/usr/bin/env node
import express from 'express';
import { PORT, dbMongo } from './config.js';
import mongoose from 'mongoose';
import { Inventory } from './models/inventory.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('welcome to mern');

});
// adding inventory
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
        const inventoryEntry = await Inventory.create(newEntry);
        return res.status(201).send(inventoryEntry);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ Error: error.message });
    }
})

//fetching inventory
//all inventory
app.get('/inventory', async (req, res) => {
    try {
        const fetchedInventory = await Inventory.find({});

        return res.status(200).json({
            size: fetchedInventory.length,
            data: fetchedInventory
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ Error: error.message });
    }
});
//one inventory
app.get('/inventory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fetchedInventory = await Inventory.findById({ id });

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'Invalid ID format'
            });
        }


        if (!fetchedInventory) {
            return res.status(404).json({
                message: 'Inventory not found'
            });
        }

        return res.status(200).json({ fetchedInventory })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ Error: error.message });
    }
});
// update
app.put('/inventory/:id', async (req, res) => {
    try {
        if (!req.body.item || !req.body.type || !req.body.description || !req.body.price || !req.body.quantity) {
            return res.status(400).send({
                message: "Add all the required fields"
            });
        }

    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ Error: error.message });
    }
})
// initializing mongo dd database
mongoose.connect(dbMongo).then(() => {
    console.log('connection to the database has been established');
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
