import City from '../../models/City.js';

export default async (req, res) => {
    try {
        const city = await City.find(req.query);

        return res.status(200).json({
            success: true,
            message: 'City retrieved successfully',
            city: city
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error retrieving city'
        });
    }
};