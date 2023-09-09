import { log } from 'debug/src/browser.js';
import ItineraryModel from '../../models/Itinerary.js';

export default async (req, res) => {

    const itineraryByCity = req.params.id.toLowerCase();
    const itineraryAll = await ItineraryModel.find(req.query);

    const filterByCity = itineraryAll.filter(itinerary => itinerary.nameCity.toLowerCase() == itineraryByCity);

    if (filterByCity.length <= 0) {
        return res.status(404).json({
            success: false,
            message: 'Itinerary not found'
        });
    }

    return res.status(200).json({
        success: true,
        message: 'Itinerary retrieved successfully',
        itinerary: filterByCity
    });
};
