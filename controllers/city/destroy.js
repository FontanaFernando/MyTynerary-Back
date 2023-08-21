import City from '../../models/City.js';

export default async (req, res) => {
    try {
        let cityId = req.params.id;
        let cityDelete = await City.findByIdAndDelete(cityId);

        if (!cityDelete) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'City deleted successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};