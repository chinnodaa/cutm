const db = require('../config/db'); // Database connection
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Load JWT Secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET;

const UserModel = {};

// Create a new user (register)
UserModel.createUser = async (name, email, password, role) => {
    try {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const [result] = await db.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, role]
        );
        
        return result.insertId; // Return user ID of the new user
    } catch (error) {
        throw error;
    }
};

// Find user by email
UserModel.findByEmail = async (email) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        return rows[0]; // Return the first user (should be unique)
    } catch (error) {
        throw error;
    }
};

// Find user by ID
UserModel.findById = async (id) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );
        return rows[0];
    } catch (error) {
        throw error;
    }
};

// Verify user password
UserModel.verifyPassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
UserModel.generateAuthToken = (user) => {
    const payload = { id: user.id, role: user.role };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

module.exports = UserModel;
