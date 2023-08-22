import City from '../../models/City.js';

export default async (req, res) => {
    try {
        const cityId = req.query.id;
        const city = await City.findById(cityId);

        if (!city) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

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
