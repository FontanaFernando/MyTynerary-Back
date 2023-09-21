import { Schema, model, Types } from 'mongoose';

let collection = 'users';

let schema = new Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', required: true, unique: true},
    image: { type: 'string' },
    password: { type: 'string', required: true },
    country: { type: 'String' }
}, {
    timestamps: true
});

let User = model(collection, schema);

export default User;