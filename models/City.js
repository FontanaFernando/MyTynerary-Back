import { Schema, model, Types } from 'mongoose';

let collection = 'cities';

let schema = new Schema({
    name: { type: 'String', required: true },
    image: { type: 'string', required: true },
    country: { type: 'String', required: true },
    details: { type: 'String', required: true }
}, {
    timestamps: true
});

let City = model(collection, schema);

export default City;