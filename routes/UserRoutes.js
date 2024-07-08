import express from 'express';
import User from '../models/user.js';
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

const router = express.Router();

// function generateToken(user){
//     return jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRES})
// }




// Register route
router.post('/register', async (req, res) => {
    try {
        User.register(
            new User({
                username: req.body.username,
                email: req.body.email,
                telephone: req.body.telephone,
                roles: req.body.roles,
            }),
            req.body.password,
            (err, user) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                } else {

                    const token = generateToken(user)
                    res.status(200).json({ success: true, user });
                }
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});



router.delete('/delete', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;
