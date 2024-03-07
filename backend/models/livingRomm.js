import mongoose from 'mongoose'

const livingRoomSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});


export const LivingRoom = mongoose.model('LivingRoom', livingRoomSchema);