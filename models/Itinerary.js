import { Schema, model, Types } from 'mongoose';

let collection = 'itineraries';

let schema = new Schema({
    nameUser: { type: 'String', required: true },
    imageUser: { type: 'string', required: true },
    nameCity: { type: 'String', required: true },
    price: { type: Number, required: true },
    time: { type: Number, required: true },
    hashtags: { type: 'array', items: {type: "string"}, required: true }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);

export default Itinerary;