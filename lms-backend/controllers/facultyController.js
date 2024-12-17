const db = require('../config/db');

exports.createAssignment = async (req, res) => {
  const { courseId, title, description } = req.body;
  try {
    await db.query('INSERT INTO assignments (course_id, title, description) VALUES (?, ?, ?)', [courseId, title, description]);
    res.status(201).json({ message: 'Assignment created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM assignments');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
