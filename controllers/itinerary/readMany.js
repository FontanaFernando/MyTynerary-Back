import Itinerary from '../../models/Itinerary.js';

export default async (req, res) => {
    try {
        const itinerary = await Itinerary.find(req.query);

        return res.status(200).json({
            success: true,
            message: 'Itinerary retrieved successfully',
            itinerary: itinerary
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error retrieving itinerary'
        });
    }
};