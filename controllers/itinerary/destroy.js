import Itinerary from '../../models/Itinerary.js';

export default async (req, res) => {
    try {
        let itineraryId = req.params.id;
        let itineraryDelete = await Itinerary.findByIdAndDelete(itineraryId);

        if (!itineraryDelete) {
            return res.status(404).json({
                success: false,
                message: 'Itinerary not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Itinerary deleted successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};