// controllers/authController.js

const UserModel = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userId = await UserModel.createUser(name, email, password, role);
        res.status(201).json({ message: 'User registered successfully', userId });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await UserModel.verifyPassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = UserModel.generateAuthToken(user);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};
