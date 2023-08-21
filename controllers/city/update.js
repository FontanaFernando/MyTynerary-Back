import City from '../../models/City.js';

export default async (req, res) => {
    try {
        const cityId = req.params.id;
        const updatedCity = await City.findByIdAndUpdate(cityId, req.body, { new: true });

        if (!updatedCity) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'City updated successfully',
            city: updatedCity
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
