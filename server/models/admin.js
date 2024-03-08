#!/usr/bin/env node
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mainAdmin: {
        type: Boolean,
        default: false
    }
});