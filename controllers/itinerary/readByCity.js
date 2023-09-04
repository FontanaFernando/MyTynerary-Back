import Itinerary from '../../models/Itinerary.js';

export default async (req, res) => {
    try {
        const itineraryByCity = req.params.nameCity;
        const itinerary = await Itinerary.find(itineraryByCity);

        if (!itinerary) {
            return res.status(404).json({
                success: false,
                message: 'Itinerary not found'
            });
        }

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
