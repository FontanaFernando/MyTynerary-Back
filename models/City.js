import { Schema, model, Types } from 'mongoose';

let collection = 'cities';

let schema = new Schema({
    name: { type: 'String', required: true },
    image: { type: 'string', required: true },
    country: { type: 'String', required: false },
    details: { type: 'String', required: false },
    create_by: { type: Types.ObjectId, ref: 'users' }
}, {
    timestamps: true
});

let City = model(collection, schema);

export default City;