import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
    try {
        const { email, password } = req.body;

        const userInDB = await User.findOne({ email });

        if (userInDB) {
            return res.json({
                success: false,
                message: 'email already in use'
            });
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        const newObj = { ...req.body };
        newObj.password = passwordHash;

        const newUser = await User.create(newObj);

        const userResponse = { _id: newUser._id, name: newUser.name, email: newUser.email, image: newUser.image };

        const token = jwt.sign({ email: newUser.email}, process.env.SECRET_KEY, { expiresIn: '1h' })

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: userResponse,
            token: token
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Error creating user'
        });
    }
};