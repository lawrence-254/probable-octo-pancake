#!/usr/bin/env node
import express from 'express';
import mongoose from 'mongoose';
import { Branches } from '../models/branches.js';
const router = express.Router();
// adding branch
router.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.location || !req.body.phone) {
            return res.status(400).send({
                message: "Add all the required fields"
            });
        }

        const newBranch = {
            name: req.body.name,
            location: req.body.location,
            phone: req.body.phone
        }
        const branch = await Branches.create(newBranch);
        return res.status(201).send(branch);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ Error: error.message });
    }
})
