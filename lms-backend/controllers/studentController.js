const db = require('../config/db');

exports.getProfile = async (req, res) => {
  const studentId = req.params.id;
  try {
    const [result] = await db.query('SELECT * FROM students WHERE id = ?', [studentId]);
    if (result.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentCourses = async (req, res) => {
  const studentId = req.params.id;
  try {
    const [results] = await db.query(
      'SELECT courses.* FROM courses INNER JOIN enrollments ON courses.id = enrollments.course_id WHERE enrollments.student_id = ?',
      [studentId]
    );
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};