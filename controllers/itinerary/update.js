import Itinerary from '../../models/Itinerary.js';

export default async (req, res) => {
    try {
        const itineraryId = req.params.id;
        const updatedItinerary = await Itinerary.findByIdAndUpdate(itineraryId, req.body, { new: true });

        if (!updatedItinerary) {
            return res.status(404).json({
                success: false,
                message: 'Itinerary not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Itinerary updated successfully',
            itinerary: updatedItinerary
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};