const db = require('../config/db');

exports.addCourse = async (req, res) => {
  const { name, description } = req.body;
  try {
    const [result] = await db.query('INSERT INTO courses (name, description) VALUES (?, ?)', [name, description]);
    res.status(201).json({ message: 'Course added successfully', courseId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM courses');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
