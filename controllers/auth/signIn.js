import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
    try {
        const { email, password } = req.body;

        const userInDB = await User.findOne({ email });

        if (!userInDB) {
            return res.json({
                success: false,
                message: 'email or password are incorrect'
            });
        }

        const validPassword = bcrypt.compareSync(password, userInDB.password);

        if (!validPassword) {
            return res.json({
                success: false,
                message: 'email or password are incorrect'
            });
        }
        
        const userResponse = { _id: userInDB._id, name: userInDB.name, email: userInDB.email, image: userInDB.image };

        const token = jwt.sign({ email: newUser.email}, process.env.SECRET_KEY )

        return res.status(200).json({
            success: true,
            message: 'User sign in successfully',
            user: userResponse,
            token: token
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Error to sign in'
        });
    }
};