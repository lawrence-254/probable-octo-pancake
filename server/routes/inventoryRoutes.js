#!/usr/bin/env node
import express from 'express';
import mongoose from 'mongoose';
import { Inventory } from '../models/inventory.js';
const router = express.Router();
// adding inventory
router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'Invalid ID format'
            });
        }

        const fetchedInventory = await Inventory.findById(id);

        if (!fetchedInventory) {
            return res.status(404).json({
                message: 'Inventory not found'
            });
        }

        return res.status(200).json({
            fetchedInventory
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error.message
        });
    }
});

// update
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.item || !req.body.type || !req.body.description || !req.body.price || !req.body.quantity) {
            return res.status(400).send({
                message: "some of the required fields are missing"
            });
        }

        const { id } = req.params;
        const updatedInventory = await Inventory.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedInventory) {
            return res.status(404).json({
                message: "Item not in the inventory"
            });
        }

        return res.status(200).json({
            message: "Item details updated successfully",
            updatedInventory
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ Error: error.message });
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'Invalid ID format'
            });
        }

        const toBeDeletedInventory = await Inventory.findByIdAndDelete(id);

        if (!toBeDeletedInventory) {
            return res.status(404).json({
                message: 'Inventory not found'
            });
        }

        return res.status(200).json({
            message: 'Inventory deleted successfully',
            deletedInventory: toBeDeletedInventory
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error.message
        });
    }
});

export default router;