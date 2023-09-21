export default async (req, res) => {
    const userResponse = { _id: req.user._id, name: req.user.name, email: req.user.email, image: req.user.image };
    res.status(200).json({ success: true, user: userResponse });
};